const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({
  	headless: true,
  	executablePath: "/usr/lib/chromium-browser/chromium-browser"
  });
  
  const page = await browser.newPage();
  await page.goto('https://chrome.google.com/webstore/detail/grepsr-web-scraping-tool/hjdijkhlfpeafghibmiabeofkiicdnjm');
  await page.screenshot({path: 'greps.png'});
 
  await browser.close();
})();