---
title: Publishing and installing private hosted npm packages with Nexus as npm repository
description: How to publish and install npm packages with Nexus
date: "2020-08-20"
---

First we need to [login](https://docs.npmjs.com/cli/v6/commands/npm-adduser) and generate an `authToken`. Within our setup at work we needed to enable the `npm Bearer Token Realm` (with read/write access to all repositories, e.g. group/private) to get the login workin, see [https://hackernoon.com/deploying-private-npm-packages-to-nexus-a16722cc8166](https://hackernoon.com/deploying-private-npm-packages-to-nexus-a16722cc8166) for more details on configuring authentication and much more, great article!


```sh
# Login and generate authToken locally on your machine with your Nexus npm user credentials
npm adduser --registry=https://your.private.repository.nexus.url/repository/npm-private/ --always-auth

# copy the authToken from your locally stored .npmrc file, cd into your /username/ folder and grab the token
vim .npmrc
```

Ideally this token isn't checked into your version control system (VCS), but this also depends on your whole CI setup and much more. Each project that wants to install packages from the private npm repo needs the `.npmrc` file configured on a project basis, otherwise you won't be able to install packages from it. Publishing new packages to Nexus is working as soon as the npm login has been successful.
