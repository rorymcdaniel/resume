import puppeteer from 'puppeteer-core';
import { marked } from 'marked';
import * as fs from 'fs';
import * as path from 'path';

async function generatePDF() {
  try {
    // Get the project root directory (one level up from dist)
    const projectRoot = path.resolve(__dirname, '..');
    
    // Read the markdown file
    const markdownPath = path.join(projectRoot, 'README.md');
    const markdown = fs.readFileSync(markdownPath, 'utf-8');
    
    // Read the CSS file
    const cssPath = path.join(projectRoot, 'resumeStyle.css');
    const css = fs.readFileSync(cssPath, 'utf-8');
    
    // Convert markdown to HTML
    const html = marked(markdown);
    
    // Create a complete HTML document
    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>${css}</style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    // Launch browser with more robust configuration
    const browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/google-chrome',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--no-zygote',
        '--single-process'
      ],
      headless: true
    });

    const page = await browser.newPage();
    
    // Set content and wait for network idle
    await page.setContent(fullHtml, {
      waitUntil: 'networkidle0'
    });

    // Ensure output directory exists
    const outputDir = path.join(projectRoot, 'output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    // Get version from environment variable or use default
    const version = process.env.RESUME_VERSION || 'dev';
    const outputPath = path.join(outputDir, `rory-mcdaniel-resume-v${version}.pdf`);

    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      }
    });

    await browser.close();
    console.log('PDF generated successfully.');
  } catch (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
}

generatePDF();