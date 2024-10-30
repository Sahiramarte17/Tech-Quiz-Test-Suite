/// <reference types="cypress" />

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust the path to where the Quiz component is rendered
  });

  it('renders the start button', () => {
    cy.get('button').contains('Start').should('be.visible');
  });

  it('starts the quiz when the start button is clicked', () => {
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist'); // Adjust the selector as needed
  });

  it('displays the next question when an answer is selected', () => {
    cy.get('button').contains('Start').click();
    cy.get('.answer').first().click(); // Adjust the selector as needed
    cy.get('.question').should('exist'); // Confirm next question displays
  });

  
});
