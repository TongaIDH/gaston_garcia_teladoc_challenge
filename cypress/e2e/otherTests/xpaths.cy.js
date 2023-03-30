describe("Working with Xpaths", () => {
  it("Should obtain it with a css selector", () => {
    cy.visit("/");
    cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    ).should("contain", "Bulbasaur");
  });

  it("Should obtain it with a xpath selector", () => {
    cy.visit("/");
    cy.xpath('//h1[contains(text(), "Bulbasaur")]').should(
      "contain",
      "Bulbasaur"
    );
  });
});
