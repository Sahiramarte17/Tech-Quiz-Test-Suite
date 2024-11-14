describe('Tech Quiz', () => {
  it('should start the quiz when "Start Quiz" button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').contains('What is the capital of France?');
  });

  it('should show score after answering all questions', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('Paris').click();
    cy.get('button').contains('Jupiter').click();
    cy.contains('Your score: 2 / 2');
  });

  it('should allow restarting the quiz', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('Paris').click();
    cy.get('button').contains('Jupiter').click();
    cy.contains('Your score: 2 / 2');
    cy.get('button').contains('Start New Quiz').click();
    cy.get('button').contains('Start Quiz');
  });
});
