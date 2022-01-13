/// <reference types="cypress" />

describe('Hero Search', () => {
	beforeEach(() => {
		page.Open();
	});

    it('Should display the hero search label', () => {
        cy.get('[data-cy=search-label]').should('have.text', 'Hero Search');
    });

    describe('Search Results', () =>{
        it('Should display the searched hero in the search results, if hero found', () => {   
            cy.get('input[id="search-box"]').type('Narco');
            cy.get('ul.search-result li > a').first().should('have.text', ' Narco ');
        });
    
        it('Should not display a hero in the search results, if no hero found', () =>{
            cy.get('ul.search-result').children().should('have.length', 0);
        });
    });
    
    const page = {
        Open: () => {
            cy.visit(' http://localhost:4200/');
        },
    };
});