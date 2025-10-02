require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      experimentalStudio: true;
    },
    env: {
      clave: process.env.CLAVE,
    }
  },
  video: false,
});

