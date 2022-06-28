module.exports= {


getSearchBtn(){
    cy.get('input[aria-label="Google Search"]').should('be.visible')
},

googleHomePage: {
    
 googleLogoImg: 'img[alt="Google"]'   

},

signOnIframe:{
    signOnPopUp : 'iframe[role="presentation"]',
    signOnPopUp_NoThanksBtn : 'button.M6CB1c.rr4y5c',
},


}