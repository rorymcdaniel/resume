import * as path from 'path';
import * as markdownpdf from 'markdown-pdf';
const inputFilePath = path.join(__dirname, 'README.md');
const outputFileName = 'output/resume.pdf';

const options: markdownpdf.Options = {
    cssPath: path.join(__dirname, 'resumeStyle.css'),
    paperFormat: 'Letter',
    paperBorder: '1cm',
    renderDelay: 1000,
};

const convertMarkdownToPdf = async (inputFile: string, outputFile: string) => {
    (markdownpdf(options).from(inputFile) as any)
        .to(outputFile, async (err: Error) => {
            if (err) {
                console.error('Error converting markdown to PDF:', err);
            } else {
                console.log(`Successfully converted markdown to ${outputFile}`);
            }
        });
};

convertMarkdownToPdf(inputFilePath, outputFileName);
