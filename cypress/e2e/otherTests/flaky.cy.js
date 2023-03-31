describe("Flaky Tests", () => {
  // it("Single query command", () => {
  //   cy.visit("/");
  //   // cy.get(
  //   //   "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
  //   // ).contains("Bulbasaaaaaaur");

  //   cy.contains(
  //     "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1",
  //     "Bulbasaaaaaaur"
  //   );
  // });

  it("Alternating command and assertion", () => {
    cy.visit("/");

    cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    )
      .should("contain", "Bulbasaur")
      //acá ya tenemos el elemento correcto
      .parent()
      .should("have.class", "card-header");
  });
});
