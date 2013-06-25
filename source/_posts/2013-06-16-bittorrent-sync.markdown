---
layout: post
published: false
title: "Bittorrent Sync - File syncing for developers"
date: 2013-06-16 18:48
comments: true
categories: 
---

Bittorrent sync is a new file sharing app released by Bittorrent Labs. People are saying its an alternative to popular file syncing services such as Dropbox, SkyDrive, etc. However I don't currently see it as being a true replacement for these services but after playing with for the last few days I must say I'm impressed and I feel it does sport some cool features I've long wished for in a file syncing app. I've even incorporated it into my development workflow as I'll outline later in this post.

What sets BS apart from similar services is that its purely a peer to peer (P2P) file syncing service. This means that files get transfer directly between your machines without going through a 3rd party's servers. This is handy is you're the more paranoid type dealing with sensitive files and have been turned off by Dropbox's less than stellar track record with security. Also handy for syncing your current projects when your company has a strict policy about letting source code sit on 3rd party servers.

One of its selling points for me was its ability exclude files and folders from being synced, a feature which has been frustratingly absent from most popular services. As a bonus this feature is implemented by a .SyncIgnore file! Since the majority of mainstream source control systems implement a similar mechanism for file exclusion most developers can simply copy and paste their existing rules if you want to sync your project files which is exactly what I did. Now you may be wondering why you would need to sync your source files if you're already using version control however I've always been a bit paranoid when it comes to my work in progress. Even though I subscribe to the idea of commit early and commit often, I've frequently found myself working for the better part of the day before commiting and I just enjoy the peace of mind that the extra bit of redundancy provides. Its also handy for easily switching between working on different machines.
