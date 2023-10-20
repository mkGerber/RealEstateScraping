const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent'); // Fix the variable here
    const rawTxt = await txt.jsonValue();

    console.log({srcTxt, rawTxt});

    await browser.close(); // Add await here
}

scrapeProduct("https://www.amazon.com/Feiyu-Pocket-Combo-Stabilizer-Detachable/dp/B0C3R2BNY5/ref=sr_1_1_sspa?crid=356LS7090TZ2Q&keywords=dji+pocket+2&qid=1697756523&sprefix=dji+pocket%2Caps%2C66&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1");
