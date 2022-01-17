/// <reference types="cypress" />

describe('Hero Detail', () => {
    const expectedHeroResponse = {
        id: 12,
        name: "Narco"
      };    

	beforeEach(() => {
		page.Open();
	});

    it('Should display the hero name heading', () =>{       		
        cy.get('[data-cy=hero-heading]').should('have.text', `${expectedHeroResponse.name.toLocaleUpperCase()} Details`);	
    });

    it('Should display the hero id', () =>{		
        cy.get('[data-cy=hero-id]').should('have.text', `id: ${expectedHeroResponse.id}`);	
    });

    describe('Hero name input',() =>{
        it('Should contain the hero name value',()=>{		
            cy.get('input[id="hero-name"]').should('have.value', `${expectedHeroResponse.name}`);	
        });

        it('Should update the hero name heading',()=>{		
            const expectedInput = 'foo bar';
            cy.get('input[id="hero-name"]').clear().type(expectedInput);
            cy.get('[data-cy=hero-heading]').should('have.text', `${expectedInput.toLocaleUpperCase()} Details`);	
        });
    });

    const page = {
        Open: () => {
            cy.visit(' http://localhost:4200/');
            cy.get('.heroes-menu > a').first().click();
        },
    };
});