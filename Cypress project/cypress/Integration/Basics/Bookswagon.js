describe('Bookswagon', () => {
    it('RegisterLoginandAddtocart', () => {
        cy.visit('https://www.bookswagon.com/')
        cy.get('#inputbar').type('White Nights{enter}')
        cy.get(':nth-child(5) > .action > :nth-child(5) > .btn-red').click();
        cy.get('#ctl00_lblTotalCartItems').click();
        cy.get('#ctl00_phBody_BookCart_lvCart_imgPayment').click();

        
    });
});