module.exports= {


getSearchBtn(){
    cy.get('input[aria-label="Google Search"]').should('be.visible')
}

}