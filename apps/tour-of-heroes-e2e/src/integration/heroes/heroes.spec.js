/// <reference types="cypress" />

describe('Heroes', () => {
	beforeEach(() => {
		page.Open();
	});

    it('should display the hero heading', () =>{
        cy.get('[data-cy=hero-heading').should('have.text', 'My Heroes');
    });


    describe('New Hero Input', () => {
        it('should display the hero name label', () =>{
            cy.get('[data-cy=new-hero-label').should('have.text', 'Hero name: ');
        });
    });

    describe('Add button', () => {
        it('should add a hero to the heroes list', () =>{
            cy.get('input[id="new-hero"]').type('Superman');
            cy.get('button[id="add-hero"]').click();
            cy.get('.heroes').contains('Superman')
        });
    });

    describe('Remove button', () => {
        it('should remove a hero from the heroes list', () =>{
            cy.contains('Bombasto').parent().find('button').click();
            cy.contains('Bombasto').should('not.exist');
        });
    });
    

	const page = {
        Open: () => {
            cy.visit('http://localhost:4200/heroes');
        },
    };
});
