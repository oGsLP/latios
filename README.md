<h1 align="center">Latios</h1>

[![Dependency Status][dependencies]][dependencies url]
[![Build Status][travis build]][travis build url]
[![Coverage Status][coveralls]][coveralls url]
![Snyk Vulnerabilities for GitHub Repo][vulnerabilities url]
![GitHub][github licence url]
![GitHub package.json dependency version (prod)][vue version url]
![GitHub package.json dependency version (dev dep on branch)][vue-cli version url]

![GitHub last commit][last commit url]
![GitHub contributors][contributors url]
![GitHub forks][forks url]
![Github stars][stars url]
![GitHub watchers][watchers url]

> A Vue UI components lib

```bash
npm install latios
```

## Usage

```javascript

// global use
import Vue from "vue";
import Latios from "latios";
Vue.use(Latios);


// individual use
import { ButtonPlugin } from "latios";
Vue.use(ButtonPlugin); // as a plugin

import { LButton } from "latios";
Vue.component('l-button',LButton); // as a component

```



## Current lib

* components
  
  * button
    
    * l-button
  
  * icon
    
    * l-icon

* directives



---

## Project setup

[dependencies]:https://david-dm.org/oGsLP/latios.svg?theme=shields.io
[dependencies url]:https://david-dm.org/oGsLP/latios
[travis build]:https://travis-ci.com/oGsLP/latios.svg?branch=master
[travis build url]:https://travis-ci.com/oGsLP/latios
[coveralls]:https://coveralls.io/repos/github/oGsLP/latios/badge.svg?branch=master
[coveralls url]:https://coveralls.io/github/oGsLP/latios?branch=master

[vulnerabilities url]:https://img.shields.io/snyk/vulnerabilities/github/oGsLP/latios.svg
[github licence url]:https://img.shields.io/github/license/oGsLP/latios.svg
[package.json version url]:https://img.shields.io/github/package-json/v/oGsLP/latios.svg
[vue version url]:https://img.shields.io/github/package-json/dependency-version/oGsLP/latios/vue.svg
[vue-cli version url]:https://img.shields.io/github/package-json/dependency-version/oGsLP/latios/dev/@vue/cli-service.svg?label=%40vue%2Fcli

[last commit url]:https://img.shields.io/github/last-commit/oGsLP/latios.svg
[contributors url]:https://img.shields.io/github/contributors/oGsLP/latios.svg
[stars url]:https://img.shields.io/github/stars/oGsLP/latios.svg?style=social
[forks url]:https://img.shields.io/github/forks/oGsLP/latios.svg?style=social
[watchers url]:https://img.shields.io/github/watchers/oGsLP/latios.svg?style=social
