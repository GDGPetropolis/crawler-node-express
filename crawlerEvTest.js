const puppeteer = require('puppeteer');

let scrape = async () => {
    
    let url = 'https://pokemondb.net/ev/all';

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2'});

    let allData = await page.evaluate(() => {
        var resultAllData = {
            name: document.querySelector('.cell-name > a').innerHTML
        }

        return resultAllData
    });

    browser.close()
    console.log('variavel dos dados', JSON.stringify(allData));
    return allData
}
scrape();