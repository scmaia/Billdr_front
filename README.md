[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/scmaia/Billdr_front)

# Introduction

## Overview
This project is a frontend React application with two simple pages:
- List Page: Fetches users from endpoint `https://jsonplaceholder.typicode.com/users` and displays the results.
- Description Page: Fetches a user's details from endpoint `https://jsonplaceholder.typicode.com/users/:user_id` and displays results.

Live: https://user-directory-example.netlify.app/

Demo:

![Screen Cast 2022-06-03 at 12 01 29 PM](https://user-images.githubusercontent.com/17395911/171931284-f28786e8-cbaf-4b38-a4ba-563cc91b66ad.gif)


## Implementation Details

- Project is bootstraped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). 
- Project uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make the API calls.
- Project uses [tailwind](https://tailwindcss.com/) as the CSS Framework. It was my first time working with it. 
- For performance and reduced number of server hits, project is using [localForage](https://github.com/localForage/localForage) for caching.
- Project has tests for `utils` as a start.


# Getting Started

## Cloud

You can view and hack on this project on [Gitpod](https://gitpod.io/#https://github.com/scmaia/Billdr_front), a Kubernetes-based, complete development environment on the cloud.

When the pod has loaded, look for this notification on the bottom left and click `Open Preview`:

<img width="500" alt="gitpod-instructions" src="https://user-images.githubusercontent.com/17395911/171926676-872cc128-7356-480c-8f75-3be904dc3b73.png">

This will open the preview screen on the side.

<img width="1593" alt="gitpod-review" src="https://user-images.githubusercontent.com/17395911/171927596-3989cbf6-327f-41e5-b2ea-da24bc40d198.png">

## Local

Assumes you already have `git`, `node (15.3.0 up)`, and `npm` installed on your machine.

- Clone repo:

```
git clone git@github.com:scmaia/Billdr_front.git
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

- Run tests

```
npm test
```


# Architecture

### ./components

This is where all the stateless components live.

### ./containers

This folder hosts complex components that manage data, state, and possibly tie together several stateless components.

### ./pages

This folder hosts the two project pages accessible via router

### ./utils

This is where API utility functions and cache utility functions live, as well as respective tests.


# Production Readiness Checklist

### Additional Features

- Add refresh button to force API call & update cache
- Add virtualization to support rendering of large users list in a performant way

### Accessibility

Run accessibility tests with Axe Dev Tools

### Performance Audit

Run performance audit with Lighthouse (in Chrome Dev Tools)

### Test

- Add unit tests for all components & functions using react-testing-library
- Add end-to-end tests with cypress or playwright
