/// <reference types="cypress" />

describe('Dashboard', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit(' http://localhost:4200/');
	});

    it('Displays Top Heroes heading', () =>{
        cy.get('[data-cy=dashboard-heading]').should('have.text', 'Top Heroes');
    });
});