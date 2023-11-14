const fs = require("fs-extra");
const concat = require("concat");

const build = async () => {
  const files = [
    "./dist/questionnaire-webcomponent/runtime.js",
    "./dist/questionnaire-webcomponent/polyfills.js",
    "./dist/questionnaire-webcomponent/main.js",
  ];

  await fs.ensureDir("dist/questionnaire-webcomponent");
  await fs.ensureDir("web-component");
  await concat(files, "web-component/questionnaire-player-webcomponent.js");
  await fs.copy('./dist/questionnaire-webcomponent/styles.css','web-component/styles.scss');
  console.log('Files concatenated successfully');
  
};

build();
