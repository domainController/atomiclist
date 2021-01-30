// require fs and puppeteer
const fs = require("fs");
const puppeteer = require("puppeteer");

async function captureScreenshot() {
  // if screenshots directory is not exist then create one
  if (!fs.existsSync("screenshots")) {
    fs.mkdirSync("screenshots");
  }

  let browser = null;

  try {
    // launch headless Chromium browser
    browser = await puppeteer.launch({ headless: true });

    // create new page object
    const page = await browser.newPage();

    // set viewport width and height
    await page.setViewport({ width: 1440, height: 1080 });

    await page.goto("https://github.com/sagar-gavhane");

    // capture screenshot and store it into screenshots directory.
    await page.screenshot({ path: `screenshots/github-profile.jpeg` });
  } catch (err) {
    console.log(`❌ Error: ${err.message}`);
  } finally {
    await browser.close();
    console.log(`\n🎉 GitHub profile screenshots captured.`);
  }
}

captureScreenshot();