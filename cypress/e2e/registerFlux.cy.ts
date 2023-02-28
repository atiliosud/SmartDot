describe("Tests on Register Flux", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/signup");
  });
  it("Should open the first step", () => {
    cy.get("#register-first-step").contains("Informações Pessoais");
  });
  it("Should get the countries", () => {
    cy.get("#country-selector option").should("have.length.above", 1);
  });
  it("Should get error 'O campo nome é obrigátorio!'", () => {
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("O campo nome é obrigátorio!");
  });
  it("Should get error 'O campo sobrenome é obrigátorio!'", () => {
    cy.get("#input-name").type("User");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("O campo sobrenome é obrigátorio!");
  });
  it("Should get error 'Selecione um país!'", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("Selecione um país!");
  });
  it("Should go to next step", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#register-second-step").contains("Informações da Empresa");
  });
  it("Should get error 'O campo nome da empresa é obrigátorio!'", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#register-second-step").contains("Informações da Empresa");
    cy.get("#input-company-segment").select("Advocacia");
    cy.get("#input-company-phone").type("16999999999");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("O campo nome da empresa é obrigátorio!");
  });
  it("Should get error 'O campo celular é obrigátorio!'", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#register-second-step").contains("Informações da Empresa");
    cy.get("#input-company-name").type("Smart Dot");
    cy.get("#input-company-segment").select("Advocacia");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("O campo celular é obrigátorio!");
  });
  it("Should get error 'O campo de segmento é obrigátorio!'", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#register-second-step").contains("Informações da Empresa");
    cy.get("#input-company-name").type("Smart Dot");
    cy.get("#input-company-phone").type("16999999999");
    cy.get("#next-step").click();
    cy.get("#form-error").contains("O campo de segmento é obrigátorio!");
  });
  it("Should open the third step", () => {
    cy.get("#input-name").type("User");
    cy.get("#input-last-name").type("Test");
    cy.get("#country-selector").select("Brazil");
    cy.get("#next-step").click();
    cy.get("#register-second-step").contains("Informações da Empresa");
    cy.get("#input-company-name").type("Smart Dot");
    cy.get("#input-company-segment").select("Advocacia");
    cy.get("#input-company-phone").type("16999999999");
    cy.get("#next-step").click();
    cy.get("#register-third-step").contains("Dados de Login");
  });
});
