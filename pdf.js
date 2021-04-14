const puppeteer = require('puppeteer');

const MARGIN = '1cm';

const isCI = (process.argv[2] || '').toLowerCase() === 'ci';
const urlSuffix = isCI ? '9000/resume' : '8000';
const CITimeout = 3000;

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(`http://localhost:${urlSuffix}`, {waitUntil: ['domcontentloaded', 'networkidle2']});
    await page.pdf({
      path: 'Maciej Sawicki - Resume.pdf',
      format: 'A4',
      printBackground: true,
      margin: {
        top: MARGIN,
        right: MARGIN,
        bottom: MARGIN,
        left: MARGIN,
      },
      displayHeaderFooter: true,
      headerTemplate: `<div></div>`,
      // fixme: footer doesn't work when margin is 0.5 cm :/ It worked for 1cm though
      footerTemplate: `<div></div>`,
    });
  } finally {
    await browser.close();
  }
};

const mainInvoker = () =>
  main()
    .catch(error => {
      console.error(error)
      process.exit(1)
    })

if (isCI) {
  setTimeout(() => {
    mainInvoker()
  }, CITimeout)
} else {
  mainInvoker()
}

// language=HTML
const footerTemplate = `
  <div style="font-size: 8px; display: flex; align-items: center; margin-left: auto; margin-right: ${MARGIN};">
    <span class="pageNumber"></span>
    <span>/</span>
    <span class="totalPages"></span>
  </div>
`;
