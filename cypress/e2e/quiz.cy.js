describe('Tech Quiz', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust based on your app's root URL
  });

  it('should start the quiz when the start button is clicked', () => {
    cy.get('button.start-quiz').click(); // Replace with your actual button selector
    cy.get('.question').should('exist'); // Ensure the question is displayed
  });

  it('should present the next question after answering', () => {
    cy.get('button.start-quiz').click();
    cy.get('.answer-option').first().click(); // Simulate answering the first question
    cy.get('.question').should('not.exist'); // Ensure the old question is gone
    cy.get('.question').should('exist'); // Ensure the new question is displayed
  });

  it('should show the score after answering all questions', () => {
    cy.get('button.start-quiz').click();
    
    // Simulate answering all questions
    cy.get('.answer-option').each(($el) => {
      cy.wrap($el).click(); // Answer each question
    });

    cy.get('.final-score').should('exist'); // Check if the score is displayed
  });

  it('should allow starting a new quiz after finishing', () => {
    cy.get('button.start-quiz').click();

    // Simulate answering all questions
    cy.get('.answer-option').each(($el) => {
      cy.wrap($el).click();
    });

    cy.get('button.start-new-quiz').click(); // Adjust selector for your new quiz button
    cy.get('.question').should('exist'); // Ensure a new quiz starts
  });
});

  