/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"

slowCypressDown(900)

describe('ejemplos login', () => {
    beforeEach(() => {
       cy.visit('https://evaluaciondocente2015.unq.edu.ar/login.php')       
    })

    it('login exitoso', () => {
        const password = Cypress.env('clave')
        //cy.log(`Clave: ${password}`);                

        cy.get('#c1').type('admin')
        cy.get('#c2').type(password, { log: false })
        cy.get('#c3').click()
        
        cy.get('.titulo11').contains('Bienvenido')
    })

    it('login fallido OK', () => {
        const password = Cypress.env('password')

        cy.get('#c1').type('admin')
        cy.get('#c2').type('frutaa')
        cy.get('#c3').click()
        
        cy.get('.warning').contains('Incorrectos')
    })

    it('login fallido', () => {
        const password = Cypress.env('password')

        cy.get('#c1').type('maximilinano')
        cy.get('#c1').contains('Incorrectos')
    })

})