# League of Random

A League of Legends champion and role randomizer.

<!-- TOC -->
* [League of Random](#league-of-random)
  * [Developers](#developers)
    * [Code scaffolding](#code-scaffolding)
    * [Lint](#lint)
    * [Development server](#development-server)
    * [Unit tests](#unit-tests)
    * [Automatic tests](#automatic-tests)
      * [Integration tests](#integration-tests)
      * [E2E tests](#e2e-tests)
    * [Build](#build)
    * [Further help](#further-help)
<!-- TOC -->

## Developers

### Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also
use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Lint

Run `npm run test:lint` to lint the project with [ESLint](https://eslint.org/docs/latest/).

### Development server

Run `npm run start` to run the application on a dev server. Navigate to `http://127.0.0.1:50000/`. The application will
automatically reload if you change any of the source files.

### Unit tests

Run `npm run test:unit` to execute the unit tests via [Jest](https://jestjs.io/docs/28.x/getting-started).

### Automatic tests

Run `npm run test:cypress` to execute the integration tests
via [Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress).

Run `npm run test:cypress:open` to open Cypress window and run tests interactively.

#### Integration tests

Before running `npm run test:cypress:e2e`, change the environment variable `CYPRESS_SPEC_FOLDER` to `integration`.

#### E2E tests

Before running `npm run test:cypress:e2e`, change the environment variable `CYPRESS_SPEC_FOLDER` to `e2e`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. If you want to
progressively build, you can run `npm run watch`.

### Further help

To get more help on the Angular CLI use `npx ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
