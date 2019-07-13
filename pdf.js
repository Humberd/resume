const puppeteer = require('puppeteer');

const MARGIN = '1cm';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000', {waitUntil: 'networkidle2'});
  await page.pdf({
    path: 'Maciej Sawicki - Resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: MARGIN,
      right: MARGIN,
      bottom: MARGIN,
      left: MARGIN,
    }
  });

  await browser.close();
})();
