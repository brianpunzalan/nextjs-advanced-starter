/* eslint-disable @typescript-eslint/no-floating-promises */
const puppeteer = require('puppeteer');

module.exports = async function testLinkedinScript(launchOptions) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-setuid-sandbox', '--no-sandbox'],
      ...launchOptions,
    });
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com');
    await page.screenshot({
      fullPage: true,
      path: './test/screenshots/linkedin-page.png',
    });
    await browser.close();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
