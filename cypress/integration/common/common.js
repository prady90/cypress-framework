const {
    Before
    
  } = require("cypress-cucumber-preprocessor/steps");

  const url = 'https://google.com'

  Before(() => {
   cy.visit(url)
  });

  