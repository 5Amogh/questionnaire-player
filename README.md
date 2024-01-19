# QuestionnairePlayer

The Questionnaire Player is a webcomponent built with the help of angular version 16.2.1

## Prerequisites for setup

Angular 16, Nodejs 16.19.0

## Setup

Run `npm install` after cloning the repo in local to install the necessary dependencies

## Build QuestionnairePlayer and generate the webcomponent 

Run `npm run build-web-comp` To build the player with the latest changes and to reflect the changes in webcomponent 

## Demo Application

Navigate to `projects/questionnaire-app` and Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

In-case the changes have been done in the library, after successful build by `npm run build-web-comp` the changes would automatically reflect in the app as well. ( only applicable to this app and not the react demo app).

## Webcomponent

The Webcomponent can be downloaded by running `npm i @Elevate/questionnaire-webcomponent`

In our angular.json file, we have included the published web component script under the "scripts" section (projects -> questionnaire-app -> architect -> build). This script is responsible for adding the questionnaire player web component functionality to our demo application `node_modules/@Elevate/questionnaire-webcomponent/questionnaire-player-webcomponent.js`

To include the npm published styles of the webcomponent in the demo app, use `node_modules/@Elevate/questionnaire-webcomponent/styles.scss` in the "styles" section (projects -> questionnaire-app -> architect -> build in angular.json)'.

For usage of the webcomponent in a react app, visit : [https://github.com/5Amogh/react-usingwebcomponent-app]

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.