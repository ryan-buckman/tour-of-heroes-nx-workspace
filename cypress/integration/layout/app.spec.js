describe('App Layout', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit(' http://localhost:4200/');
	});

    it('Displays the app title', () =>{
        cy.get('[data-cy=app-title]').should('have.text', 'Tour of Heroes');
    });

	describe('Nav', () => {		
		it('Displays the correct Dashboard link', () =>{
			cy.get('[data-cy=dashboard-link]')
            .should('have.attr', 'href')
            .and('include', '/dashboard');
		});

		it('Displays the correct Heroes link', () =>{
			cy.get('[data-cy=heroes-link]')
            .should('have.attr', 'href')
            .and('include', '/heroes');
		});

	});	
});