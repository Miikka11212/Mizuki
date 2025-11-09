---
title: How to change workflow after depreciation of Ubuntu 20.04?
published: 2025-04-16
pinned: false
description: Ubuntu depreciation
tags: [Bug, Documentation]
category: Short
licenseName: "Unlicensed"
author: Oscar Wang
draft: false
---
In your repository with workflow file, in .yml

simply change `runs-on: ubuntu-20.04` 

to `runs-on: ubuntu-latest`

this should automatically change it to ubuntu 24 #8 

https://github.com/actions/runner-images/issues/11101