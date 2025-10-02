/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"

slowCypressDown()

describe('ejemplos frutas', () => {
    beforeEach(() => {
       cy.visit('cypress/index.html')       
    })

    it('busqueda exitosa', () => {
        
        cy.get('#titulo').contains('Ejemplo')
    })

    it('busqueda fallida', () => {
        
        cy.get('#titulo').contains('fruta')
    })

    it('navegacion exitosa', () => { 

        cy.get('#link').click()        
        cy.get('#listado_frutas').contains('Manzana')
    })

    it('navegacion fallida', () => { 

        cy.get('#link').click()        
        cy.get('#listado_frutas').contains('Pera')
    })

})