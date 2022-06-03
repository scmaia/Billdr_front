[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/scmaia/Billdr_front)

# Introduction

## Overview
This project is a frontend React application with two simple pages:
- List Page: Fetch users on endpoint "https://jsonplaceholder.typicode.com/users" and list the result.
- Description Page: Fetch one user on endpoint "https://jsonplaceholder.typicode.com/users/:user_id" and lists extended list of user details.

Demo: ///add netlify url

## Requirements
- React.js, fetch API
- Responsive UI
- CSS framework per recommendation: tailwind

## Additional features
- Data caching using LocalForage
- Unit test examples using React Testing Library

# Getting Started

## Cloud

You can view and hack on this project on [Gitpod](https://gitpod.io/#https://github.com/scmaia/Billdr_front), a Kubernetes-based, complete development environment on the cloud.

When the pod has loaded, look for this notification on the bottom left and click `Open Preview`:


This will open the preview screen on the side, and you can hack away



## Local

Assumes you already have `git`, `node (15.3.0 up)`, and `npm` installed on your machine.

- Clone repo:

```
git clone ...
```

- Install dependencies:

```
npm install
```

- Start dev environment:

```
npm start
```

View website on http://localhost:3000


# Architecture


### ./components

This is where all the stateless components live.

### ./containers

This folder hosts complex components that manage data, state, and possibly tie together several stateless components.

### ./pages

This folder hosts the two project pages accessible via router

### ./utils

This is where API utility functions and Cache utility functions live, as well as respective tests.

# Production Readiness Checklist

### Additional Features

- Add refresh button to force API call & update cache
- Add virtualization to support rendering of large users list in a performant way

### Accessibility

Run accessibility tests with Axe Dev Tools

### Performance Audit

Run performance audit with Lighthouse (in Chrome Dev Tools)

### Test

- Add unit tests for all components & functions
- Add end-to-end tests 
