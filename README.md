# Angular 101
*Samples for Angular*

[![Build Status](https://circleci.com/gh/gdyrrahitis/angular-101/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/gdyrrahitis/angular-101/tree/master)
[![Node version](https://img.shields.io/badge/node-4.5.0-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gdyrrahitis/angular-101)

Samples are hosted under Azure Web App, link to application:

[https://angular-101.azurewebsites.net/](https://angular-101.azurewebsites.net/)

## Installation
**To run the samples, first install all dependencies.**

1. Make sure you have latest node installed. [Nodejs](https://nodejs.org/en/download/)

2. Got to project root directory, open a command line window and type:
`npm install`

3. After all dependencies are installed, on cmd, type the following to open in browser: `npm start`

## Contents
This application contains various samples made using Angular. Samples will be updated frequently, along with the new versions of Angular, either by adding new content or just upgrading the underlying framework.

Each sample contains a `README.md` which provides some documentation on the purpose and the code, so either navigate individually to each sample or use the [wiki](https://github.com/gdyrrahitis/angular-101/wiki).

## Tests
To run the tests, open a `cmd` window in project root directory and run the following command: 

`npm test`

Watch the tests passing by getting some feedback from the cmd window.

Tests are found relative to each `.ts` file, in a folder named `specs`. There are two types,
1. Isolated tests, which test components and other items in isolation
2. Integrated tests, which test components and other items in an integrated test environment.

## Contribute
If you wish, you can contribute on the existing samples, or even introduce new, making this repo more rich, in order for other people to benefit from the code that lies here.

As usual, create a new branch with the prefix `sample-` and then your name of the branch. After done, create a PR and I will review it as soon as I can.

Please, try to follow the application structure, in which under `samples` folder are all samples located, under each category, like `Bindings`, `Components`, etc., inside each there is the sub-category which is going to be explored. Itself contains an `src` folder with all the code and a barrel (`index.ts`) to expose its items.