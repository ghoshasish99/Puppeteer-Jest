import BasePage from "./BasePage"

export default class LoginPage extends BasePage{
    async open(){
        await page.goto("http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login")
        await page.waitForSelector("#email-label")
    }
    async enterRegistrationDetails(fname, lname, email, password){
        await page.click("#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center > div > div.login > button > span.MuiButton-label")
        await page.waitForSelector("#firstname")
        await page.type("#firstname",fname)
        await page.type("#lastname",lname)
        await page.type("#registeremail",email)
        await page.type("#password",password)
        await page.type("#confirmpassword",password)
        await page.click("#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center > div > form > button > span.MuiButton-label")
    }
    async registrationSuccessful(){
        await page.waitForSelector("#productsearch")
    }
    async login(email,password){
        await page.type("#email",email)
        await page.type("#password",password)
        await page.click("#root > div.MuiGrid-root.MuiGrid-container.MuiGrid-justify-xs-center > div > form > button")
        await page.waitForSelector("#productsearch")
    }
}