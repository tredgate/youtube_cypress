describe("První testy pro YouTube", () => {
  it("Otevření Tredgate, odsouhlasení cookies, otevření Cypress Akademie", () => {
    cy.visit("https://tredgate.cz/");
    cy.get("#menu-item-2221 > a").click();
  });

  it("Vyplnění formuláře na kontakt", () => {
    cy.visit("https://tredgate.cz/");
    cy.get(
      '#menu-item-2782 > [href="https://tredgate.cz/kurzy-predavani-znalosti-komunite/"]'
    ).click();
    cy.get(
      ".wp-block-buttons > .wp-block-button > .wp-block-button__link"
    ).click();
    cy.get("#g2277-jmno").type("YouTube jede");
  });
});
