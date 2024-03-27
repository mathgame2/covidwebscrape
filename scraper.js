const puppeteer = require('puppeteer');

async function scrapeNumber(url){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="block-system-main"]/div/div[1]/div[1]/div[2]/div[1]/div/span/div/span[1]');
    const number = await el.getProperty('textContent');
    const nmb = await number.jsonValue();

    if (nmb == 4){
        console.log('asdf')
    }

    browser.close();

    console.log({nmb});
    return {nmb};

}

scrapeNumber('https://koronavirus.gov.hu/');