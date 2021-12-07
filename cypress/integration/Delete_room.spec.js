import { deletefunction } from "./Page_objects.spec"
import { loginfunction } from "./Page_objects.spec"
import { logoutfunction } from "./Page_objects.spec"

///<reference types="cypress"/>
it("test",function(){
loginfunction(cy)
const room_button =":nth-child(1)>.btn"
cy.get(room_button).click()
const room_menu = ":nth-child(1) >.action > img"
      const posistion = "bottomRight" 
      cy.get(room_menu).click(posistion)
      deletefunction(cy)
      logoutfunction(cy)
})