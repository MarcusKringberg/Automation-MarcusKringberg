///<reference types="cypress"/>

import { deletefunction } from "./Page_objects.spec"
import { loginfunction } from "./Page_objects.spec"
import { logoutfunction } from "./Page_objects.spec"

it ("delete bill",function(){
    cy.visit("http://localhost:3000")
loginfunction(cy)

cy.wait(5000)
const bill_button = ":nth-child(3)>.btn"
cy.get(bill_button).click()
const menu_button =":nth-child(1)>.action > img"
cy.get(menu_button).click()
const button_for_delete = ".menu>:nth-child(2)"
cy.get(button_for_delete).click()
logoutfunction(cy)
})
