describe('App Layout', () => {
	beforeEach(() => {
		page.Open();
	});

    it('Should display the app title', () =>{
        cy.get('[data-cy=app-title]').should('have.text', 'Tour of Heroes');
    });

	describe('Nav', () => {		
		it('Should display the dashboard link', () =>{
			cy.get('[data-cy=dashboard-link]')
            .should('have.attr', 'href')
            .and('include', '/dashboard');
		});

		it('Should display the heroes link', () =>{
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