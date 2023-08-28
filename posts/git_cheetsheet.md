---
title: Git cheat sheet
publish_date: 2023-08-28
---

Git Cheat Sheet: Essential Commands 

# git

`git --version`

`git config --list`  

`git config --global user.name "suresh"` 

`git config --global user.email "temp@gmail.com"`  

`git init` initialize git repository

`git status`  inspecting

`git add .`  adds files to the staging area

`.gitignore`  files in git ignore are ignored  while pushing into repository

`git reset .`   untrack changes

`git add main.ts` add sing file

`git commit -m "write message here"`  commits with message 

`git log` info about all commits

`git commit -a -m "fix:typo"`  add and commit at same time

## git remote

`git remote`  which remote repositories you are connected with

`git remote add origin https://link`  

`git remote -v`  shows links

`git remote show origin`  additional info about repo

## git push

`git push origin master`  pushes to remote repo from local repo

`-u` set origin to upstream remote (it allows us to use git pull)

`git push origin master -u` 

when the remote repo is one commit ahead of local repo

## git merge

fetch the changes from remote repo and commit new changes and merge

`git fetch`  

`git merge origin/master`  

## git pull

`git pull origin master`   if -u is used we can use

`git pull`   

## git clone

`git clone url`

## github codespaces

`.`  jut hit . in github project you can know play around with code in cloud based vscode editor in web

## git branch

`git branch` list of all branches in current project

`git branch -M main` rename master branch to main

`git branch newbranch` creates new branch

`git branch -d newbranch` delete a branch

`git branch -D newbranch` delete a branch forcefully

## checkout

`git checkout branchname`  switches to other branch

`git checkout -b cool`  creates new branch and switches to it

`git checkout -` switches to previous branch

## merge conflicts

2 Branches Modify the same code

`git merge`  

if you want to go back due to conflict

`git merge --abort`  

if you want to merge by handling you can use merge commit

`git add .` 

`git commmit -m "merge:fixed conflict"` 

## fork

used when working on open source project

## pull request

request to developer for merging in open source project

Tip for being connected to original repo to get updates

`git remote add upstream url`   link to repo

`git fetch upstream`  to update repo

`git rebase udtream/master`   add changes to on to p of your changes

## git reset

`git reset` remove last staging

`git reset id`  

`git reset --hard id`  gets back and removes changes files also

don’t use reset as other developers are rely on it

## git revert

`git log`  

`git revert id`  commit doesnt lost its still  in history 

revert is better to use than reset its better to use revert when working on team 

## git ammend

change commit without reseting and reverting

modifies the last commit

`git commit -am "bad message"`  

`git commit —amend -m “message”`  

if you want to add staging files with past commit 

`git add .`

`git commit —amend --no-edit`

## git stash

save your work for later

without comitting it

`git stash` 

`git stash pop`  

`git stash save psot1` to save with name to remember what it is for

`git stash list`  

`git stash apply 1` 

## git rebase

keep feature in sync

without extra merge commits

`git rebase master`   

Tip: work on duplicate feature branch and use rebase if it is not throeing any bugs try on original feature branch

## git squash

combining commits together

`git rebase master --interactive`  

squash 838483 1

squash 833383 2

squash 834583 3

save and close and edit commit message

`git log`  

now we can see only one commit combining all commits together




