/// <reference types="Cypress" />

describe ("test suite - conjunto de pruebas",() => {

    beforeEach(() => {
        // runs before every test block
    cy.visit('http://zero.webappsecurity.com')   
      })


    it("Prueba E2E - Transferencia de fondos", () => {

        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(0)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type("300")
        cy.get('#tf_description').type("transferencia de prueba")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")
   
    })

    it("Validacion de actualizacion del grafico", () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1275 > tspan').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1275 > tspan').should("not.be.visible")
    
    })


})