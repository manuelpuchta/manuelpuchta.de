---
title: How to move your git repository to a new remote address
description: Doing a git repository movement
date: "2019-11-18"
---

Little challenge today at work: We wanted to move a git repository to a new remote address.
And we stumbled again upon a wrong `git remote` usage and had to do it twice. So if you wanna move a git repository with its entire git history use `--mirror`. Hopefully the following little reminder will help you and my future self to do a git repo movement in a more convinient way. 🌱

Let's assume you want to move your git repository from GitHub `git@github.com:manuelpuchta/a-nice-project.git` to Bitbucket `git@bitbucket.org:manuelpuchta/new-home-of-that-nice-project.git` with all of its branches, tags and commit history:

## Mirror usage

First step: Clone your repository locally.

```sh
git clone --mirror git@github.com:manuelpuchta/a-nice-project.git
```

Second step, change into that newly created directory:

```sh
cd a-nice-project.git/
```

Final step, push that git project to the new remote address:

```sh
git push --mirror git@bitbucket.org:manuelpuchta/new-home-of-that-nice-project.git
```

Now you can clone the "copied" repository from the new remote and enjoy all of its history from another machine, folder or whatsoever.

```sh
git clone git@bitbucket.org:manuelpuchta/new-home-of-that-nice-project.git
cd new-home-of-that-nice-project/
```

If you need more details and options (e.g. Git Large File Storage objects support), GitHub Help has a nice page that covers this scenario in depth: [https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository).
