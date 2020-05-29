/* global cy */
describe('index', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('renders title in <h1>', () => {
        cy.contains('h1', 'Nathan Cahill')
    })
})
