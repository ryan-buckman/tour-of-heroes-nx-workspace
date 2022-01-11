/// <reference types="cypress" />

describe('Hero Detail', () => {
    const expectedHeroResponse = {
        id: 12,
        name: "Narco"
      };    

	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit(' http://localhost:4200/');

        cy.get('.heroes-menu > a').first().click();

	});

    it('Displays the correct hero name heading', () =>{       		
        cy.get('[data-cy=hero-heading]').should('have.text', `${expectedHeroResponse.name.toLocaleUpperCase()} Details`);	
    });

    it('Displays the correct hero id', () =>{		
        cy.get('[data-cy=hero-id]').should('have.text', `id: ${expectedHeroResponse.id}`);	
    });

    it('Input should contain the hero name value',()=>{		
        cy.get('input[id="hero-name"]').should('have.value', `${expectedHeroResponse.name}`);	
    });

    it('Input should update the hero name heading',()=>{		
        const expectedInput = 'foo bar';
        cy.get('input[id="hero-name"]').clear().type(expectedInput);
        cy.get('[data-cy=hero-heading]').should('have.text', `${expectedInput.toLocaleUpperCase()} Details`);	
    });
});