// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe("Supabase authentication", () => {
  it("logs in successfully", () => {
    cy.visit("http://localhost:3000"); // visit the application
    cy.contains("Log In").click();

    cy.get(":nth-child(1) > .supabase-ui-auth_ui-input").type(
      "fohoteh788@ezgiant.com"
    );
    cy.get(":nth-child(2) > .supabase-ui-auth_ui-input").type("123456");
    cy.get(".supabase-ui-auth_ui-button").click();

    // // send a request to the Supabase authentication API to verify the login
    // cy.request({
    //   method: "POST",
    //   url: "https://auth.supabase.co/login",
    //   body: {
    //     email: "fohoteh788@ezgiant.com",
    //     password: "123456",
    //   },
    // }).then((response) => {
    //   expect(response.status).to.eq(304);
    //   expect(response.body).to.have.property("token");
    // });
  });
});
