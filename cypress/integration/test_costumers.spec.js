///<reference types="cypress"/>

import { loginfunction } from "./Page_objects.spec"
import { logoutfunction } from "./Page_objects.spec"
import { createfunction } from "./Page_objects.spec"

describe("Login",function() {
    it("Login", function() { 
      loginfunction(cy)
      const costumer_tab =".blocks>:nth-child(2)>.btn" 
      cy.get(costumer_tab).click()
      const create_costumer = "h2>.btn"
      cy.get(create_costumer).click()
      const field_for_costumer_name = ":nth-child(1)> input"
      const name_of_the_costumer = "Jonas Hagblom"
      const field_for_email =":nth-child(2)> input" 
      const Email_to_the_costumer = "jonas.hagblom@bredband.net"
      const Phone_number_to_the_costumer = "087468252"  
      cy.get(":nth-child(1)> input").type("Jonas Hagblom")
      cy.get(field_for_email).type(Email_to_the_costumer)
      cy.get(":nth-child(3)> input").type(Phone_number_to_the_costumer)
      createfunction(cy)
      logoutfunction(cy)
    })
})
    