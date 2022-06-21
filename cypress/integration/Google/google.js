import { Given,Then } from "cypress-cucumber-preprocessor/steps";
import googlePo from "../pageObjects/google.po";
const url = 'https://google.com'



Given('I open Google page', () => {
 cy.log('begin')
 googlePo.getSearchBtn()
})

Then('I see Google in the title', () =>{

    cy.log('completed')

})