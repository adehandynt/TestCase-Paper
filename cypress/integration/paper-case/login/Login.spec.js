/// <reference types="Cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('https://paper.id/webappv1/#/login');
        cy.wait(5000)
    });
    it('T-SRS-REQ-010-1-1', () => {
        cy.get('#email').type("mi16.6701160072@gmail.com")
        cy.get('#password').type("qq23ws45er67")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.url().should('include', '/invoicer/dashboard')
    });
    it('T-SRS-REQ-010-1-2', () => {
        cy.get('#email').type("MI16.6701160072@GMAIL.COM")
        cy.get('#password').type("qq23ws45er67")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.url().should('include', '/invoicer/dashboard')
    });
    it('T-SRS-REQ-010-1-3', () => {
        cy.get('#email').type("mi16.6701160072@gmail.com")
        cy.get('#password').type("QQ23WS45ER67")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.get('.warning-header').should('include.text','Email atau Kata Sandi yang Anda Masukan Salah')
    });
    it('T-SRS-REQ-010-1-4', () => {
        const passwordToPaste = 'qq23ws45er67'
        cy.get('#email').type("mi16.6701160072@gmail.com")
        cy.get('#password').invoke('val', passwordToPaste).should('not.have.value', passwordToPaste)
        cy.get('.paper-button').click()
        cy.wait(5000)
    });
    it('T-SRS-REQ-010-1-5', () => {
        cy.get('#email').type("mi16.6701160072@gmail.com")
        cy.get('#password').type("P@ssw0rd")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.get('.warning-header').should('include.text','Email atau Kata Sandi yang Anda Masukan Salah')
        
    });
    it('T-SRS-REQ-010-1-6', () => {
        cy.get('#email').type("adehandynt98@gmail.com")
        cy.get('#password').type("qq23ws45er67")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.get('.warning-header').should('include.text','Email tidak terdaftar')
    
    });
    it('T-SRS-REQ-010-1-7', () => {
        cy.get('#email').type("adehandynt98@gmail.com")
        cy.get('#password').type("P@ssw0rd")
        cy.get('.paper-button').click()
        cy.wait(5000)
        cy.get('.warning-header').should('include.text','Email tidak terdaftar')
        
    });
});