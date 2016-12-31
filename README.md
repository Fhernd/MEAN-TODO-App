# Project Configuration

Steps to run to test the app:

 1. Install the dependencies, both, in the root folder and in the `backend` folder.
 2. Run the ExpressJS server located in the `backend` folder. But, firt configure a database in [mlab](https://mlab.com/) with a user by granting read/write permissions, then create a collection with a document with this structure `{"text": "Some todo", "isCompleted": false}`. Command to run the server: `node server`.
 2. Run the Angular 2 Application: `ng serve`.

Comments: `@JohnLrnr`

# MeanTodosApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
