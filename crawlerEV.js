const puppeteer = require('puppeteer');
const fs = require('fs');

let scrape = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://pokemondb.net/ev/all');
  await page.screenshot({path: 'example.png'});
  await page.waitFor(3000);
  let EVList = await page.$$eval('table >  tbody > tr', nodes => {
   
    return nodes.map(node => {

      var resultAllData = {
        Name: node.querySelector('td[class="cell-name"] > a').innerHTML,
        HP: node.querySelector('td[class="text-center cell-grid"]:nth-child(3) > b').innerHTML,
        Attack: node.querySelector('td[class="text-center cell-grid"]:nth-child(4) > b').innerHTML,
        Deffense: node.querySelector('td[class="text-center cell-grid"]:nth-child(5) > b').innerHTML,
        SpAtk: node.querySelector('td[class="text-center cell-grid"]:nth-child(6) > b').innerHTML,
        SpDef: node.querySelector('td[class="text-center cell-grid"]:nth-child(7) > b').innerHTML,
        Speed: node.querySelector('td[class="text-center"]:nth-child(8) > b').innerHTML,
      }
      return resultAllData
    })
  });
  console.log(EVList);
  await browser.close();
  return EVList
}
scrape().then((value) =>{
  console.log(value);
  fs.appendFile('PokeEV.json' ,JSON.stringify(value), () => {});
});