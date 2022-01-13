describe('App Layout', () => {
	beforeEach(() => {
		page.Open();
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

	const page = {
        Open: () => {
            cy.visit(' http://localhost:4200/');
        },
    };
});