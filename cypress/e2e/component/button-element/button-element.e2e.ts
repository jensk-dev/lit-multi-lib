// Tests the button element of the dev server homepage.
describe("Button Element Testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders a button", () => {
    cy.get("button-element").shadow().find("button").should("exist");
  });

  it("increments the button text on click", () => {
    cy.get("button-element")
      .click()
      .click()
      .click()
      .shadow()
      .find("button")
      .then(button => {
        expect(button.text().trim()).to.equal(
          "Welcome to Vite with Lit & Tailwind (x3)"
        );
      });
  });
});
