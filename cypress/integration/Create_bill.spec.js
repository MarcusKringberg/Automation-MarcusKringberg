///<reference types="cypress"/>

import { createfunction } from "./Page_objects.spec"
import { loginfunction } from "./Page_objects.spec"
import { logoutfunction } from "./Page_objects.spec"

it ("Bill",function(){
loginfunction(cy)
cy.wait(5000)
const bill_button = ":nth-child(3)>.btn"
cy.get(bill_button).click()
const create_bill_button = "h2 >.btn" 
cy.get(create_bill_button).click()
const bill_price_field = "input"
const bill_price = "400"
cy.get(bill_price_field).type(bill_price)
const paid_checkbox = ".checkbox"
cy.get(paid_checkbox).click()
createfunction(cy)
logoutfunction(cy)
})
