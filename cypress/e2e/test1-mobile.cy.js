describe('test1', function() {
    it('what_it_does', function() {
        cy.viewport(411, 823)
        cy.visit('https://dev-finance.netlify.app/')
        //Cadastro de nova transação
        cy.get('#transaction > .button').click()
        cy.get('#description').type('Salário')
        cy.get('#amount').type('1400')
        cy.get('#date').type('2024-07-23')
        cy.get('button').contains('Salvar').click()
        //Asserção que verifica se a transação foi cadastrada corretamente
        cy.contains('td', 'Salário').should('exist')
        //Cadastro de nova transação
        cy.get('#transaction > .button').click()
        cy.get('#description').type('Mercado')
        cy.get('#amount').type('-300')
        cy.get('#date').type('2024-07-25')
        cy.get('button').contains('Salvar').click()
        //Exclui a segunda transação cadastrada
        cy.get('[data-index="1"] > :nth-child(4) > img').click()
        //Asserção que verifica se a transação foi removida com sucesso
        cy.contains('td', 'Mercado').should('not.exist')
    })
})   