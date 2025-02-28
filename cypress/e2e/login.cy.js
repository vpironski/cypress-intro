describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/login.html');
  });

  it('should show an error for invalid email format', () => {
    cy.get('[data-test-id="email"]').type('invalidemail');
    cy.get('[data-test-id="login-submit"]').click();
    cy.get('[data-test-id="email-error"]').should('be.visible');
  });

  it('should show an error for empty password', () => {
    cy.get('[data-test-id="email"]').type('user@example.com');
    cy.get('[data-test-id="login-submit"]').click();
    
    cy.get('[data-test-id="password-error"]')
        .should('have.text', 'Enter your password')  // Check the text first
        .should('be.visible');  // Then check visibility
  });

  it('should allow login with valid credentials', () => {
    cy.get('[data-test-id="email"]').type('user@example.com');
    cy.get('[data-test-id="password"]').type('ValidPassword123');
    cy.get('[data-test-id="login-submit"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Login successful!');
    });
  });
});
