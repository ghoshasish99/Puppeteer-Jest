import LoginPage from '../pages/LoginPage'
import {fname,lname,email,password} from '../data/registrationdetails'
import ProductPage from '../pages/ProductPage'

describe("Registration", ()=>{
    let loginPage
    let productPage
    beforeAll(async()=>{
        jest.setTimeout('10000')
        loginPage = new LoginPage()
        productPage = new ProductPage()

    });
    it("User should be able to enter Registration details", async ()=>{
        let newemail = email
        newemail = newemail.replace("email1",Date.now())
        await loginPage.open()
        await loginPage.enterRegistrationDetails(fname, lname, newemail, password)
    });
    it("Registration should be successful", async ()=>{
        await loginPage.registrationSuccessful()
    });
});