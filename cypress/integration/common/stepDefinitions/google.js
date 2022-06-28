import { Given,Then, When,Before, And} from "cypress-cucumber-preprocessor/steps";
import googlePo from "../pageObjects/google.po";
import navigationPO from "../pageObjects/navigation.po";


const url = 'https://google.com'


Given('I open Google page', () => {
cy.visit(navigationPO.navigationURLs.timeOutNYCURL)
 cy.log('begin')
 googlePo.getSearchBtn()
})

And('I see Google heading on the main page', () =>{
    cy.get(googlePo.googleHomePage.googleLogoImg).should('be.visible')
})

When('I click on No Thanks button on the signonpopup',() => {
  
    cy.log('visit completed')
})

Then('I should no longer see the signonpopup',() => {
    // cy.getIframeBody comes from index/commands.js
    cy.getIframeBody(googlePo.signOnIframe.signOnPopUp)
    .find(googlePo.signOnIframe.signOnPopUp_NoThanksBtn)
    .click()
    cy.wait(1000) 
    cy.end()
})

