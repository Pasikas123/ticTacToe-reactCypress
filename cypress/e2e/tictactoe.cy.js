describe('Testing tic-tac-toe game', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page visibility', () => {
    it('Check if elements are visible', () => {
      cy.get('.status').should('contain', 'Kitas žaidėjas');
      cy.get('.board').should('be.visible');
      cy.get('.reset-button').should('contain', 'Pradėti iš naujo');
    });

    it('Check if winner status is visible (vertical line)', () => {
      cy.verticalWinner();
      cy.get('.status').should('contain', 'Laimėjo: X');
    });

    it('Check if winner status is visible (horizontal line)', () => {
      cy.horizontalWinner();
      cy.get('.status').should('contain', 'Laimėjo: X');
    });

    it('Check if winner status is visible (diagonally - left to right)', () => {
      cy.diagonalWinnerLtoR();
      cy.get('.status').should('contain', 'Laimėjo: X');
    });

    it('Check if winner status is visible (diagonally - right to left)', () => {
      cy.diagonalWinnerRtoL();
      cy.get('.status').should('contain', 'Laimėjo: X');
    });
  });

  describe('Reset button functionality', () => {
    it('Check if reset button works', () => {
      cy.get('.square').eq(0).click(); // x moves
      cy.get('.square').eq(1).click(); // o moves

      cy.get('.reset-button').click();

      cy.get('.status').should('contain', 'Kitas žaidėjas');
      cy.get('.square').each((sq) => {
        cy.wrap(sq).should('be.empty');
      });
      cy.contains('.status', 'Laimėjo').should('not.exist');

    });
  });

  describe('Game functionality', () => {
    it('Check if you can press already used square', () => {

      cy.get('.status').should('contain', 'Kitas žaidėjas: X');

      cy.get('.square').eq(0).click({ timeout: 10000 });
      cy.get('.status').should('contain', 'Kitas žaidėjas: O');


      cy.get('.square').eq(0).click();
      cy.get('.status').should('contain', 'Kitas žaidėjas: O');
      cy.get('.square').eq(0).should('contain', 'X');

    });

    it('Check if you can continue game after win', () => {

      cy.verticalWinner();
      cy.get('.status').should('contain', 'Laimėjo: X');

      cy.clickEmptyFields();

      cy.get('.square').each(($el) => {
        if (!$el.text().trim()) {
          cy.wrap($el).should('be.empty');
        }
      });

      cy.get('.status').should('contain', 'Laimėjo: X');

    });

    it('Check if player turn shown correctly', () => {

      cy.get('.status').should('contain', 'Kitas žaidėjas: X');
      cy.get('.square').eq(0).click();

      cy.get('.status').should('contain', 'Kitas žaidėjas: O');
      cy.get('.square').eq(1).click();

      cy.get('.status').should('contain', 'Kitas žaidėjas: X');
      cy.get('.square').eq(3).click();

      cy.get('.status').should('contain', 'Kitas žaidėjas: O');
      cy.get('.square').eq(2).click();

      cy.get('.status').should('contain', 'Kitas žaidėjas: X');
      cy.get('.square').eq(6).click();
    });

  });

  describe('Draw status', () => {
    it('Check if draw status is shown', () => {

      cy.drawGame();
      cy.get('.status').should('contain', 'Lygiosios!');

    });
  });

});