# QuestionnairePlayer

The **Questionnaire Player** is a web component built with Angular (version 16.2.1).

## Prerequisites for Setup

- Angular 16
- Node.js 16.19.0

## Setup

1. Run `npm install` after cloning the repo locally to install the necessary dependencies.

### Build QuestionnairePlayer and Generate the Web Component

2. Run `npm run build-web-comp` to build the player with the latest changes and reflect the updates in the web component.

### Demo Application

3. Navigate to `projects/questionnaire-app` and run `ng serve` for a dev server. Open [http://localhost:4200/](http://localhost:4200/) in your browser. The application will automatically reload when source files are changed.
   - If changes are made to the library, running `npm run build-web-comp` will automatically reflect those changes in the demo app (applicable only to this Angular app, not the React demo app).

### Web Component

4. The web component can be installed by running:

   ```bash
   npm i questionnaire-webcomponent
   ```
5. In angular.json, include the published web component script under the "scripts" section (navigate to projects -> questionnaire-app -> architect -> build).

6. Path to the web component script: node_modules/questionnaire-webcomponent/questionnaire-player-webcomponent.js
To include the npm-published styles of the web component, add the following path to the "styles" section in angular.json:
    ```bash
    node_modules/questionnaire-webcomponent/styles.scss
    ```
For usage in a React app, visit the React demo repository - https://github.com/5Amogh/react-usingwebcomponent-app

### Key Features

1. **API-based Data Fetching**
   - The component accepts a solution ID and configuration options via an `apiConfig` object.
   - It fetches questionnaire data dynamically through API calls based on the provided solution ID.

2. **Configurable Theming**
   - Theming is flexible and configurable at the application level using CSS variables, allowing for seamless integration into various applications with customized designs.

3. **Pagination**
   - A built-in pagination system makes it easy to navigate through multi-page questionnaires.

4. **Question Map (Navigation)**
   - A question map provides a visual overview of progress:
     - Filled questions are marked in green.
     - Mandatory unfilled questions are highlighted in red.
     - Non-mandatory unfilled questions are shown in light green.
   - Clicking on a question in the map allows users to directly navigate to that question.


## Adding the Web Component to an Angular Application

### Consumption in HTML File
Once the configuration and theming are set up, you can use the web component in your HTML file as shown above. Ensure the correct configuration object (apiConfig) is passed, and adjust the fileSizeLimit if needed for file uploads within the component.
To integrate the web component into your Angular application, include the following in your HTML file:

```html
<questionnaire-player-main
  [apiConfig]="apiConfig"
  [fileSizeLimit]="50"
></questionnaire-player-main>
```
### Example Configuration (Angular)
In your Angular component, you can configure the apiConfig object as follows:
```typescript
apiConfig = {
  baseURL: '<base_url>',
  userAuthToken: '<user_auth_token>',
  solutionId: '<solution_id>',
  solutionType: 'survey' | 'observation'
}
```
### Theming Configuration
To apply custom theming in your application, you can define CSS variables in your global styles (e.g., `:root`):
```css
:root {
  --primary-color: 1B4CA1;
  --btn-outline: 1B4CA1;
  --error-color: rgb(150, 4, 4);
  --question-tip: gray;
  --general-btn-text-color: white;
  --general-btn-hover-bg: white;
  --secondary-btn-bg: white;
  --secondary-btn-hover-bg: whitesmoke;
  --card-bg: white;
  --disabled-btn-bg: gainsboro;
  --disabled-btn-text: gray;
}
```
This allows you to control the visual appearance of the web component and ensure it aligns with your application's design.
