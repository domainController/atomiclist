const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {

    const chrm = await puppeteer.launch({ executablePath: '/usr/lib/chromium-browser/chromium-browser' });
    const page = await chrm.newPage();

    page.once('domcontentloaded', () => console.log(`\n🎉 DOM is ready.`));
    page.once('load', () => console.log(`\n🎉 Page is loaded.`));
    //page.on('request',(request) => console.log(request.url()));
    page.once('close', () => console.log(`\n🎉 Page is closed.`));

    try {
        const resp = await page.goto('https://shorturl.at/nHVZ3', { timeout: 10000, waitUntil: 'networkidle2',});
        const [element] = await page.$$('div.C-b-p-j-D.Ka-Ia-j.C-b-p-j-D-gi');
        const overviewText = await page.evaluate(element => element.textContent, element);
/*        const recherc = await overviewText.match(/scrap|grep|grab|extract|data|string/ig).length;
        console.log(`Le nombre d'occurences de scrap est de: ${recherc}\n`);*/
//        console.log({overviewText});
/*        fs.writeFile('./overview.txt', JSON.stringify(overviewText), err => {
            if (err) {console.log('something went wrong');}
             else {console.log('File successfully written!');}
        });*/
    } catch (e) {console.log('Aha I caught the error!\n');}

    // Fetches url's page
    // const url = await page.url();
    // console.info(`The url is: ${url}\n`);
    // const chrono = await page.metrics(); console.log(chrono);
    await page.close();
    await chrm.close();
})();