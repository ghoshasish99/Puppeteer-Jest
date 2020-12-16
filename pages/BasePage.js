export default class BasePage{
    async wait(){
        await page.waitFor(time)
    }
    async getTitle(){
        await page.title()
    }
    async getURL(){
        return await page.url()
    }
}