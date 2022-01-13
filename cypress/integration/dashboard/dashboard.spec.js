/// <reference types="cypress" />

describe('Dashboard', () => {
	beforeEach(() => {
		page.Open();
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

	const page = {
        Open: () => {
            cy.visit(' http://localhost:4200/');
        },
    };
});
