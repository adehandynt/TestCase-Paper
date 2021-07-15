/// <reference types="Cypress" />

context('Invoice', () => {
    beforeEach(() => {
        cy.visit('https://paper.id/webappv1/#/login');
        cy.get('#email').type("mi16.6701160072@gmail.com")
        cy.get('#password').type("qq23ws45er67")
        cy.get('.paper-button').click()
        cy.wait(5000)
    });

    it('T-SRS-REQ-020-1-1', () => {
        cy.get('.parent-dropdown > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.get('.paper-button').click()
        cy.get('.save-invoice-container > .ng-star-inserted > .btn-group > #single-button').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.wait(3000)
        cy.get('.content-error > p').should("include.text","Ada data yang harus diisi namun belum diisi")
    });
    
    it('T-SRS-REQ-020-1-2', () => {
        cy.get('.parent-dropdown > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.get('.paper-button').click()
        cy.get('form.ng-pristine > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('Kristoporus Tlali {enter}')
        cy.wait(5000)
        cy.get('#btn_product_list_modal').click()
        cy.wait(5000)
        cy.get('.p-datatable-tbody > tr').eq(0).click()
        cy.get('.footer-body > .green-button').click()
        cy.wait(5000)
        cy.get('#quantity').type("1")
        cy.get('.save-invoice-container > .ng-star-inserted > .btn-group > #single-button').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.wait(3000)
        cy.get('.btn-cancel-form-data').click()
        cy.url().should('include', '/invoicer/invoice/view/')
        
    });

    it('T-SRS-REQ-020-1-3', () => {
        cy.get('.parent-dropdown > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.get('.paper-button').click()
        cy.get('#mat-input-2').type("{selectall}INV/2021/0001")
        cy.get('form.ng-pristine > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('Kristoporus Tlali {enter}')
        cy.wait(5000)
        cy.get('#btn_product_list_modal').click()
        cy.wait(5000)
        cy.get('.p-datatable-tbody > tr').eq(0).click()
        cy.get('.footer-body > .green-button').click()
        cy.wait(5000)
        cy.get('#quantity').type("1")
        cy.get('.save-invoice-container > .ng-star-inserted > .btn-group > #single-button').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.wait(3000)
        cy.get('.form-md-container-custom').find('div').should('have.class','content-error-message')
        cy.get('.content-popup > span').should('include.text','sudah dipakai')
        cy.get('#mat-input-2').should('have.class','ng-invalid')
        cy.get('.btn-cancel-form-data').click()
        cy.url().should('include', '/invoicer/invoice/view/')
       
    });

    it('T-SRS-REQ-020-1-4', () => {
        cy.get('.parent-dropdown > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.get('.paper-button').click()
        cy.get('#mat-input-4').invoke('val', '01/07/2021')
        cy.get('form.ng-pristine > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('Kristoporus Tlali {enter}')
        cy.wait(5000)
        cy.get('#btn_product_list_modal').click()
        cy.wait(5000)
        cy.get('.p-datatable-tbody > tr').eq(0).click()
        cy.get('.footer-body > .green-button').click()
        cy.wait(5000)
        cy.get('#quantity').type("1")
        cy.get('.save-invoice-container > .ng-star-inserted > .btn-group > #single-button').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.wait(3000)
        cy.get('.form-md-container-custom').find('div').should('have.class','content-error-message')
        cy.get('#mat-input-4').should('have.class','ng-invalid')
        cy.get('.btn-cancel-form-data').click()
        cy.url().should('include', '/invoicer/invoice/view/')
    });
    
    it('T-SRS-REQ-020-1-5', () => {
        cy.get('.parent-dropdown > :nth-child(3) > a').click()
        cy.get(':nth-child(1) > .dropdown-item').click()
        cy.get('.paper-button').click()
        cy.get('form.ng-pristine > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').type('Kristoporus Tlali {enter}')
        cy.wait(5000)
        cy.get('#btn_product_list_modal').click()
        cy.wait(5000)
        cy.get('.p-datatable-tbody > tr').eq(0).click()
        cy.get('.footer-body > .green-button').click()
        cy.wait(5000)
        cy.get('#quantity').type("1")
        cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("10")
        cy.get('.notes > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("Pembayaran Jasa Desain Website")
        cy.get('.terms > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("Website akan diserahkan setelah pembayaran diterima")
        cy.get('.save-invoice-container > .ng-star-inserted > .btn-group > #single-button').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.wait(3000)
        cy.get('.btn-cancel-form-data').click()
        cy.url().should('include', '/invoicer/invoice/view/')
    });
});