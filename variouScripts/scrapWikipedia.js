const puppeteer = require("puppeteer");
 
(async () => {
  const browser = await puppeteer.launch({
  	headless: true,
  	executablePath: "/usr/lib/chromium-browser/chromium-browser"
  });
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Web_scraping");
 
  title = await page.evaluate(() => {
    return document.querySelector("#firstHeading").textContent.trim();
  });
  console.log(title);
  await browser.close();
})();