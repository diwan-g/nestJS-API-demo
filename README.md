<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


### Work in progress- Learning Diary API using NestJS & Typescript
**User Module 99% complete**
* SignIn/Signout (Authentication implemented)
* Sessions & Authorization implemented
* Check for duplicates during signup
* check for valid emails during signup
* prevent unauthorized access to routes
* find users

**Diary module Work in progress**
* Create & save Diary entry
* For testing purposes dates are in string format and tags is also string instead of an array as sqlite doesn't support arrays.
* 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API TEST USERS

src/users/requests.http

## API TEST Diary

src/diaries/requests.http



