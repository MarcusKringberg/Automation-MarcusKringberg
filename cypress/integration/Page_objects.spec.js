
function createfunction(cy){
    const create_button = ".blue"
cy.get(create_button).click()
}
export{createfunction}

function logoutfunction(cy){
    const logout = ".user > .btn"
    cy.get(logout).click()

}
export {logoutfunction}
function deletefunction(cy) {
    const delete_button = ".menu :nth-child(2)"
    cy.get(delete_button).click()


}
export{deletefunction}
function loginfunction(cy) {
    cy.visit("http://localhost:3000")
    const username_form = ":nth-child(1)> input"
    const password_form = ":nth-child(2)> input"
    const login_button =".btn"
    const username = "tester01"
    const password = "GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
    cy.get(username_form).type(username)
    cy.get(password_form).type(password)
    cy.get(login_button).click()
  }
export{loginfunction}
