/// <reference types="cypress" />

describe('Dashboard', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit(' http://localhost:4200/');

		cy.intercept('GET','api/heroes', {fixture: 'heroes.json'});
	});

    it('Displays Top Heroes heading', () =>{
        cy.get('[data-cy=dashboard-heading]').should('have.text', 'Top Heroes');
    });

	it('Displays the heroes menu', () =>{
		cy.get('.heroes-menu > a').then(($links) =>{
			expect($links).to.have.length(4);
			expect($links[0]).to.contain.text('Narco').and.contain.attr('href');
			expect($links[1]).to.contain.text('Bombasto').and.contain.attr('href');
			expect($links[2]).to.contain.text('Celeritas').and.contain.attr('href');
			expect($links[3]).to.contain.text('Magneta').and.contain.attr('href');		
		});		
	});
});
