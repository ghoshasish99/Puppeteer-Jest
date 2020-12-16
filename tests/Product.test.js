import LoginPage from '../pages/LoginPage'
import {loginemail,loginpassword} from '../data/logindetails'
import {title,firstname,lastname,addr1,addr2,city,state,zip,cardNumber,nameOnCard,expiryMonth,expiryYear,securityCode} from '../data/paymentdetails'
import { product } from '../data/productdetails'
import ProductPage from '../pages/ProductPage'
import { browserContext } from '../jest-puppeteer.config'

describe("Product", ()=>{
    let loginPage
    let productPage
    beforeAll(async()=>{
        jest.setTimeout('10000')
        loginPage = new LoginPage()
        productPage = new ProductPage()

    });   
    it("User should be able to search a product", async ()=>{
        await loginPage.open()
        await loginPage.login(loginemail,loginpassword)
        await productPage.searchProduct(product)
    });
    it("User should be able to add product to cart", async ()=>{
        await productPage.addProductToCart(product)
    });
    it("User should be able to buy Product", async ()=>{
        await productPage.purchaseProduct(title,firstname,lastname,addr1,addr2,city,state,zip,cardNumber,nameOnCard,expiryMonth,expiryYear,securityCode)
    });
});