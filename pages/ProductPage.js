import BasePage from './BasePage'

export default class ProductPage extends BasePage{
    async searchProduct(product){
        await page.type("#productsearch",product)
        await page.click("#searchicon")
        await page.waitForXPath("//*[@id='root']/div/div/div/div/div/h6/a[text()='"+product+"']")
    }
    async addProductToCart(product){
        await page.click("div[class='productlistdetails']>div>h6>a")
        const elements = await page.$x('//button/span[text()="Add to your basket"]')
        await elements[0].click()
        await page.click("#basket")
        await page.waitForSelector("#proceedtocheckout")
    }
    async purchaseProduct(title,fname,lname,addr1,addr2,city,state,zip,cardNumber,nameOnCard,expiryMonth,expiryYear,securityCode){
        await page.click("#proceedtocheckout")
        await page.waitForSelector("#datitle")
        await page.type("#datitle",title)
        await page.type("#dafirstname",fname)
        await page.type("#dalastname",lname)
        await page.type("#daaddressline1",addr1)
        await page.type("#daaddressline2",addr2)
        await page.type("#dacity",city)
        await page.type("#dastateprovinceregion",state)
        await page.type("#dazippostcode",zip)
        await page.click("#buttonnext")
        await page.waitForSelector("#cardnumber")
        await page.type("#cardnumber",cardNumber)
        await page.type("#nameoncard",nameOnCard)
        await page.type("#expirymonth",expiryMonth)
        await page.type("#expiryyear",expiryYear)
        await page.type("#securitycode",securityCode)
        await page.click("#buttonconfirm")
        
    }
}