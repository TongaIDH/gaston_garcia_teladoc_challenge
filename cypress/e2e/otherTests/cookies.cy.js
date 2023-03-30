describe("Testing Cookies", () => {
  beforeEach(() => {
    cy.session("login", () => {
      cy.visit("https://pokedexpokemon.netlify.app/");
      cy.setCookie("nombre", "Gaston");
    });
    cy.visit("https://pokedexpokemon.netlify.app/");
  });

  it("Should get cookies", () => {
    //cy.visit('https://pokedexpokemon.netlify.app/');
    cy.getCookies().should("not.be.empty");
  });

  it("Should add a cookie", () => {
    //cy.visit("https://pokedexpokemon.netlify.app/");
    //cy.setCookie('nombre', 'Gaston');
    cy.getCookies().should("have.length", 1);
  });

  it("Should get specific cookie", () => {
    cy.log()
    cy.getCookie("nombre").should("have.a.property", "value", "Gaston");
  });
});
