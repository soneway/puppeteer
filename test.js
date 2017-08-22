const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://baidu.com');
  await page.screenshot({ path: 'screenshot.png' });

  browser.close();
})();