var puppeteer = require('puppeteer');

( async () =>{

    const browser = await puppeteer.launch({
        "headless" :false
    })
    const page = await browser.newPage();
    await page.goto('http://screenplay-contacts.herokuapp.com/', { waitUntil: 'networkidle2'});
    await page.waitForXPath('//button[text()="New"]');
    await page.click('body > app-root > div > contact-list > div > div:nth-child(1) > button');
    await page.type('input[name="contact-name"]','Puppeteer1')
    await page.type('input[name="contact-email"]','Puppeteer@user.com')
    await page.type('input[name="contact-phone-mobile"]','8989898989898')
    await page.type('input[name="contact-phone-work"]','20202020202')
    await page.click('body > app-root > div > contact-list > div > div.col-md-5.col-md-offset-2 > contact-details > div:nth-child(2) > form > button')
    //await page.pdf({format:'A4',path:'Contacts.pdf'})
    //await page.screenshot({path:'Contacts.png'})
}

)();