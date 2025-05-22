Cypress.Commands.add('verticalWinner', () => {
    cy.get('.square').eq(0).click(); // x moves
    cy.get('.square').eq(1).click(); // o moves
    cy.get('.square').eq(3).click(); // x moves
    cy.get('.square').eq(2).click(); // o moves
    cy.get('.square').eq(6).click(); // x moves
});

Cypress.Commands.add('horizontalWinner', () => {
    cy.get('.square').eq(0).click(); // x moves
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(6).click();
    cy.get('.square').eq(2).click();
});

Cypress.Commands.add('diagonalWinnerLtoR', () => {
    cy.get('.square').eq(0).click(); // x moves
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(6).click();
    cy.get('.square').eq(8).click();
});

Cypress.Commands.add('diagonalWinnerRtoL', () => {
    cy.get('.square').eq(2).click(); // x moves
    cy.get('.square').eq(5).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(8).click();
    cy.get('.square').eq(6).click();
});

Cypress.Commands.add('clickEmptyFields', () => {
  cy.get('.square').each(($el) => {
    if (!$el.text().trim()) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add('drawGame', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(8).click();
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(5).click();
    cy.get('.square').eq(2).click();
    cy.get('.square').eq(6).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(7).click();
});

