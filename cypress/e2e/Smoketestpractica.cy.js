/// <reference types="Cypress" />

describe ("test suite - Practica",() => {

    it("Validacion pagina de inicio", () => {  
    
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('.orangehrm-login-branding > img').should("be.visible"),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible"),
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.1"),
        cy.get('.oxd-button').should("be.visible")
    })

    it.only("Validacion de login", () => {  
    
        cy.visit('https://opensource-demo.orangehrmlive.com'),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin"),
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123"),
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click(),
        cy.get('.orangehrm-header-container > .oxd-button').click(),
        cy.get('.oxd-autocomplete-text-input > input').type("text"),
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("text"),
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Text-1"),
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Text-1")


    })


    it("", () => {
       
    
    })


})