import { Given,Then, When,Before, And} from "cypress-cucumber-preprocessor/steps";
import navigationPO from "../pageObjects/navigation.po";
import timeoutPO from "../pageObjects/timeout.po"
import commonFunc from "../stepDefinitions/commonFunc"


Before(() => {
   cy.visit(navigationPO.navigationURLs.timeOutNYCURL)
   cy.wait(5000)
  });

Given('I open TimeOut webpage', () => {
 
//cy.get(timeoutPO.timeOutHeaderLogo,{timeout: 60000})

//commonFunc.getInnerText(timeoutPO.timeOutHeaderLogo,'Timeout')
//.should('be.visible')
 
cy.get(timeoutPO.timeOutHeaderLogo,{timeout: 60000}).should(($div) => {
  expect($div.get(0).innerText).to.include('Timeout')
})


})



