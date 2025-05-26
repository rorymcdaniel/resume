import { mdToPdf } from 'md-to-pdf';
import * as path from 'path';

(async () => {
  const input = path.join(__dirname, 'README.md');
  const output = path.join(__dirname, 'output', 'resume.pdf');

  await mdToPdf({ path: input }, { dest: output, css: path.join(__dirname, 'resumeStyle.css') })
    .then(() => console.log('PDF generated successfully.'))
    .catch((err) => {
      console.error('Error generating PDF:', err);
      process.exit(1);
    });
})();