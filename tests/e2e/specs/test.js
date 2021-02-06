// https://docs.cypress.io/api/introduction/api.html

describe("Homepage", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Starship Finder");
  });

  it("Doing Search", () => {
    cy.visit("/");
    cy.get("#search-input").type("CR90{enter}");
    cy.get(".starship-list .columns")
      .wait(5000)
      .children()
      .then(children => {
        cy.wrap(children)
          .its("length")
          .should("eq", 1);
      });
  });

  it("View Detail", () => {
    cy.visit("/");
    cy.get(".starship-list .columns")
      .children()
      .first()
      .click();
    cy.contains("h4", "Detail Starship").wait(3000);
  });

  it("Data Loaded", () => {
    const numberOfChildren = 10;
    cy.visit("/");
    for (let i = 0; i < 4; i++) {
      cy.scrollTo(0, "100%")
        .wait(1000)
        .then(() => numberOfChildren + 10);
      cy.get(".starship-list .columns")
        .children()
        .then(children => {
          cy.wrap(children)
            .its("length")
            .should("eq", numberOfChildren);
        });
    }
  });
});
