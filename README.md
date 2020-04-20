# Portfolio of SHUVASIS DATTA

[![Build Status](https://travis-ci.com/shuvasisdatta/portfolio.svg?branch=master)](https://travis-ci.com/shuvasisdatta/portfolio) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Sections of Portfolio

- About
- Educations
- Skills
- Portfolio
- Research & Publications
- Awards & Honors
- Contact

## Tools used

- Vue.js v2 for frontend
- Vue Router for Routing
- Bulma as css framework
- chart.js for chart
- particles.js for beautiful floating particles on homepage
- travis ci as ci/cd
- local database.json file for storage all data

## Installation via Docker

```
# build the project
docker build . -t portfolio-app

#run the project. Replace port 8080 with your own unused port if necessary.
docker run -d -p 8080:80 portfolio-app
```

Now navigate to http://localhost:8080 from your browser and boom! your portfolio is live

## Setup and run the project locally

### Prerequisits

- Node.js
- Yarn

```
# clone the repo
git clone https://github.com/shuvasisdatta/portfolio.git

# install the project and dependencies
yarn install

# compiles and hot-reloads for development
yarn serve

# lints and fixes files
yarn lint

# compiles and minifies for production
yarn build
```

For more configurations see official [Configuration Reference](https://cli.vuejs.org/config/).
