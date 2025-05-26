import { mdToPdf } from 'md-to-pdf';
import * as path from 'path';
import * as fs from 'fs';
import puppeteer from 'puppeteer';

const originalLaunch = puppeteer.launch;
puppeteer.launch = (options) => {
  return originalLaunch({
    ...options,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
};

(async () => {
  const input = path.join(__dirname, 'README.md');
  const output = path.join(__dirname, 'output', 'resume.pdf');

  process.env.PUPPETEER_EXECUTABLE_PATH = require('puppeteer').executablePath();

  await mdToPdf(
    { path: input },
    {
      css: path.join(__dirname, 'resumeStyle.css'),
      pdf_options: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      } as any,
    } as any
  )
    .then((pdf) => {
      if (pdf?.content) {
        fs.mkdirSync(path.dirname(output), { recursive: true });
        fs.writeFileSync(output, pdf.content);
        console.log('PDF generated successfully.');
      }
    })
    .catch((err) => {
      console.error('Error generating PDF:', err);
      process.exit(1);
    });
})();