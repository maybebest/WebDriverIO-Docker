## System requirements
You’ll need Node.js installed.

* Install at least v16.x or higher as this is the oldest active LTS version
* Only releases that are or will become an LTS release are officially supported

If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.

## Install packages
* `npm install`

## About project
* WebdriverIO version: 8 or above
* reporter: `@wdio/allure-reporter` with `allure-commandline` for CLI commands
 
https://webdriver.io/docs/allure-reporter/

https://www.npmjs.com/package/allure-commandline

## Scripts
* start app: `npm run app:start`
* run all tests: `npm run wdio:run`
* generate allure report: `npm run allure:generate_report` 
  (report will be generated under ./allure-report/index.html)
* clear allure reports: `npm run allure:clear`

## Docker
* build image: `npm run docker:build`
* run image: `npm run docker:run`
* shut down image: `npm run docker:kill`
