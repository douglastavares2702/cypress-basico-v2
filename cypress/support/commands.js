Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Douglas')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('datg2702@hotmail.com')    
    cy.get('#phone').type('988632111')
    cy.get('#open-text-area').type('teste')               
    cy.contains('button', 'Enviar').click() 
})
