const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapOveriviewText(url) {

    const browser = await puppeteer.launch({ headless: true, executablePath: '/usr/lib/chromium-browser/chromium-browser' });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const [element] = await page.$$('div.C-b-p-j-D.Ka-Ia-j.C-b-p-j-D-gi');
    const overviewText = await page.evaluate(element => element.textContent, element);
    console.log({ overviewText });

}

scrapOveriviewText('https://shorturl.at/nHVZ3');

// document.getElementsByClassName('C-b-p-j-D Ka-Ia-j C-b-p-j-D-gi'[0].innerText;
// const [el] = await 
// const overviewText = await el.textContent.trim();
// console.log(overviewText);

// const overview = await page.$$eval('C-b-p-j-D Ka-Ia-j C-b-p-j-D-gi', anchors => {
//    return anchor => anchor.textContent.trim()
//   })