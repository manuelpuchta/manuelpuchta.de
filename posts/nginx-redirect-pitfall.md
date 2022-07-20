---
title: A NGINX redirect pitfall that resulted in a "This site can't be reached" error
description: How to not configure a NGINX language and trailing slash redirect with $http_host and how to do it properly
date: '2022-01-31'
published_time: '2022-01-31 19:00:00 +0000 UTC'
---

While working on the relaunch of [tomorrow.one](https://www.tomorrow.one/) early last year, we moved the whole web tech stack to [Kubernetes](https://kubernetes.io/) and switched to a project based dockerized NGINX setup for our web frontends. This allowed us to be more flexible with any upcoming requests, but it also opened the door for new challenges and pitfalls. Besides implementing language redirects for german and english browser languages, we had to create and maintain a lot of outdated page redirects so that we don't miss out on old URL traffic and won't lose any potential customers.

To get the new URL structure applied to all incoming requests I created the following redirect rule, which knows about `$language_suffix` through this [accept language](https://www.nginx.com/resources/wiki/modules/accept_language/#alternative) configuration, within a custom [NGINX conf file](http://nginx.org/en/docs/beginners_guide.html#conf_structure):

```sh
rewrite ^/$ https://$http_host/$language_suffix/ permanent;
```

I tested all kinds of incoming request use cases of that NGINX configuration while runnnig the docker container locally and was totally confident that everything would be redirected as expected. For example:

- `http://localhost` redirects to `https://localhost/en-EU/` (if Accept-Language field in HTTP header includes `en`)

In the test above you can see my main goal of getting the `https` and a missing [trailing slash](https://stackoverflow.com/search?q=nginx+trailing+slash) `/` applied correctly. After merging that update and testing all common redirect scenarios again within the platform on a testing environment, I was sure: **everything is running as expected**.

Some days ago we wanted to improve our continuous integration (CI) workflow to decrease our pipeline runtimes and also the footprint that comes with it. We knew that we could switch to a different build pipeline approach for each needed environment by the help of some [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) environment variables. Additionally we used that time to improve some CI configurations that would also increase the security aspect of maintaining needed environment varialbes. A win-win situation, yay!

With the help of one of our Platform Engineers (Thanks [René](https://www.linkedin.com/in/rene-veenhuis/)! 👋) we found a nice solution that allowed us to switch from four to three docker images, while still being able to satisfy all needed testing and preview environments. This resulted in a build pipeline speed up by ~30%, awesome!

After testing and merging this improvement to production I was confident and really happy: **everything was running as expected**.

But it wasn't this time. A few hours later customers and our support team got back to us and reported that they weren't able to access some of our web pages. A quick check showed us that some URLs were running into a _"This site can't be reached"_ error. We also recognized that some requests were trapped in an endless redirect loop. But why?

So we rolled back and had a deeper look on our recently added changes again. We introduced one major change with the update that we were also easily recognizing within the not reachable URLs:

```sh
- listen 80;
+ listen 8080;

# this rewrite wasn't touched
rewrite ^/$ https://$http_host/$language_suffix/ permanent;
```

We switched from port 80 to 8080 within the NGINX and Kubernetes service configuration. The non reachable URLs included that port change as well, as they resulted in `https://localhost:8080/en-EU/not/?so=cool`, for example. We analyzed the redirect behaviour through some `curl` commands and were able to identify the root cause of the endless redirects: `$http_host` within a NGINX config isn't doing what I thought it would do.

```sh
# do a request with a missing trailing slash and some URL parameters
curl -IL https://localhost/en-EU/not\?so\=cool

# results as expected in a 301, which comes from the rewrite permanent notation
# but why did the 'https' go missing, while the trailing slash has been added?
HTTP/2 301
location: http://localhost/en-EU/not/?so=cool

# the next request applies the https again!?
HTTP/1.1 301 Moved Permanently
Location: https://localhost/en-EU/not/?so=cool

# done
HTTP/2 200
```

Some [research](https://stackoverflow.com/a/15414811/1239760) later we were able to fix our redirect error by updating `$http_host` with `$host`. Learning: `$http_host` includes the port number (if present in request), `$host` doesn't. Additionally we needed to ensure port changes on [redirects](https://nginx.org/en/docs/http/ngx_http_core_module.html#absolute_redirect) weren't applied by setting `absolute_redirect off;` (this eliminates the 8080 port being added to a redirected URL).

So this **wasn't running as expected from day one**, but didn't come up earlier as other services (e.g. EC2 server) in front of this site were covering for that misconfiguration. With the switch to port 8080 we were able to identify this pitfall and improved the NGINX config to match our desired result:

```sh
# disable absolute_redirect
+ absolute_redirect off;

# add $host instead of $http_host
- rewrite ^/$ https://$http_host/$language_suffix/ permanent;
+ rewrite ^/$ https://$host/$language_suffix/ permanent;
```

Another `curl` test resulted in a correct redirect handling:

```sh
curl -IL https://localhost/en-EU/not\?so\=cool

# is doing a 301 as expected and adding the missing trailing slash
HTTP/2 301
location: /en-EU/not/?so=cool

# done
HTTP/2 200
```

Finally, **everything was running as expected.**
