import { mdToPdf } from 'md-to-pdf';
import * as path from 'path';

(async () => {
  const input = path.join(__dirname, 'README.md');
  const output = path.join(__dirname, 'output', 'resume.pdf');

  await mdToPdf(
    { path: input },
    {
      css: path.join(__dirname, 'resumeStyle.css'),
      launchOptions: {
        args: ['--no-sandbox'],
      }
    } as any
  ).then((pdf) => {
    if (pdf?.content) {
      const fs = require('fs');
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.writeFileSync(output, pdf.content);
      console.log('PDF generated successfully.');
    }
  }).catch((err) => {
    console.error('Error generating PDF:', err);
    process.exit(1);
  });
})();