const puppeteer = require('puppeteer');

const MARGIN = '1cm';

const isCI = (process.argv[2] || '').toLowerCase() === 'ci';
const port = isCI ? '9000' : '8000';

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(`http://localhost:${port}`, {waitUntil: ['domcontentloaded', 'networkidle2']});
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
      footerTemplate: footerTemplate,
    });
  } finally {
    await browser.close();
  }
};

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

// language=HTML
const footerTemplate = `
  <div style="font-size: 8px; display: flex; align-items: center; margin-left: auto; margin-right: ${MARGIN};">
    <span class="pageNumber"></span>
    <span>/</span>
    <span class="totalPages"></span>
  </div>
`;
