const puppeteer = require("puppeteer");
const fs = require("fs");

async (ChromeWebStoreUrl) => {

        /* opening chrome */
        const browser = await puppeteer.launch({ executablePath: '/usr/lib/chromium-browser/chromium-browser' });
        const page = await browser.newPage();
        await page.goto('https://shorturl.at/blsI0', { timeout: 15000, waitUntil: 'DOMContentLoaded' });

        /* 1/4 grabs extension name */
        const [namext] = await page.$$('h1.e-f-w');

        /* 2/4 gives number of users */
        const [usersfield] = await page.$$('span.e-f-ih');
        const usersnumber = await page.evaluate(usersnumber => usersnumber.textContent, usersnumber);
        const regexpr = /\d+,?\d+/;
        const [indice] = usersnumber.match(regexpr)

        /* 3/4 gives number of keywords*/
        try {
            const [preview] = await page.$$('div.C-b-p-j-Pb');
            const [overview] = await page.$$('div.C-b-p-j-Oa');
            const descText = await page.evaluate(preview => preview.textContent, preview);
            const mainText = await page.evaluate(overview => overview.textContent, overview);
            const fullText = descText + mainText;
            const videOccurences = fullText.match(/youtube|video|list|channel|subscr/ig).length;
            const twitOccurences = fullText.match(/twitter|tweet|list|account|follow/ig).length;

            /* 4/4 grabs extension ID */
            const extensionUrl = await page.url();
            const extensionId = await extensionUrl.split('/')[6];

        } catch (e) { console.log('Aha I caught the error!\n'); }
        ();

        /* close the browser */
        await page.close();
        await browser.close();