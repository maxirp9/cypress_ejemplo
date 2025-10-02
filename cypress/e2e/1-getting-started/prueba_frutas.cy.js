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

    it('busqueda fallida de "fruta" en pagina principal', () => {
        
        cy.get('#titulo').contains('fruta')
    })

    it('busqueda exitosa de "Manzana" en el listado de frutas', () => { 

        cy.get('#link').click()        
        cy.get('#listado_frutas').contains('Manzana')
    })

    it('busqueda fallida de "Pera" en el listado de frutas', () => { 

        cy.get('#link').click()        
        cy.get('#listado_frutas').contains('Pera')
    })

})