describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
      cy.visit('/'); // Adjust the path to your application
    });
  
    it('completes the quiz and shows the score', () => {
      cy.get('button').contains('Start').click();
  
      // Simulate answering all questions
      cy.get('.answer').each((answer) => {
        cy.wrap(answer).click(); // Click each answer
      });
  
      cy.get('.finish-button').click(); // Click finish button
      cy.get('.score').should('exist'); // Check score display
    });
  
    it('allows restarting the quiz', () => {
      cy.get('button').contains('Start').click();
      cy.get('.answer').first().click();
      cy.get('.finish-button').click();
      
      cy.get('button').contains('Restart').click(); // Adjust selector if needed
      cy.get('button').contains('Start').should('be.visible');
    });
  });
  