/// <reference types="cypress" />

import { slowCypressDown } from "cypress-slow-down"

slowCypressDown(200)

describe('Test de SQ', () => {
    beforeEach(() => {
       cy.visit('https://sq.unq.edu.ar/')       
    })

    it('link al nucleo', () => {
        cy.get('#link_sq_nucleo').click()
        cy.wait(0)
        cy.get('#username').type('maximiliano.rugna')
        cy.get('#password').type('Enzomaestro9')
        cy.get('input').contains('Ingresar').click()
        cy.wait(0)
        cy.contains('Desarrollado por SIU-CIN')

    })

    it('link al academico', () => {
        cy.get('#link_sq_academico').click()
        cy.wait(0)
        cy.get('#username').type('maximiliano.rugna')
        cy.get('#password').type('Enzomaestro9')
        cy.get('input').contains('Ingresar').click()
        cy.wait(0)
        cy.contains('Desarrollado por SIU-CIN')

    })
})