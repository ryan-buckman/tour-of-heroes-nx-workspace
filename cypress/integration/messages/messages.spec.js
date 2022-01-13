/// <reference types="cypress" />

describe('Messages', () => {
	
    it('Should clear the messages when the clear messages button is clicked', () => {
        cy.visit(' http://localhost:4200/');

        cy.get('[data-cy="clear-messages-button"]').click();
        cy.get('[data-cy="message"]').should('not.exist');
    });

    describe('dashboard', () =>{
        it('Should display the fetched heroes message', () =>{
            cy.visit(' http://localhost:4200/');
            cy.get('[data-cy="message"]').should('have.text', ' HeroService: fetched heroes ');
        });  
    });

    describe('hero detail', () =>{
        it('should display the hero detail message', () =>{
            const expectedHeroId = 12;         

            cy.visit(`http://localhost:4200/detail/${expectedHeroId}`);
            cy.get('[data-cy="message"]').should('have.text', ` HeroService: fetched hero id=${expectedHeroId} `);
        });
    });
});
