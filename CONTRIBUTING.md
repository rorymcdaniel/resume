# Contributing to My Resume

This repository contains my resume in Markdown format, which is automatically converted to PDF and released when changes are pushed to the main branch. Here's how to make updates:

## Making Changes

1. Edit `README.md` to update your resume content
   - The content in README.md is what will be displayed on the GitHub repository homepage
   - Use standard Markdown formatting
   - The file will be automatically converted to PDF with the styling from `resumeStyle.css`

2. If you want to modify the styling:
   - Edit `resumeStyle.css` to change the PDF appearance
   - The CSS file controls the PDF formatting, not the GitHub display

## Local Development

To test changes locally before pushing:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build and generate the PDF:
   ```bash
   npm run build-and-run
   ```

3. Check the generated PDF in the `output` directory
   - The local version will be named `rory-mcdaniel-resume-vdev.pdf`

## Automated Release Process

When you push changes to the main branch:

1. GitHub Actions will automatically:
   - Build the PDF
   - Create a new release with an incremented version number
   - Attach the PDF to the release
   - The PDF will be named `rory-mcdaniel-resume-vX.Y.Z.pdf` where X.Y.Z is the version number

## Versioning

- The version number is automatically incremented with each push
- The format is `vX.Y.Z` where:
  - X = major version
  - Y = minor version
  - Z = patch version
- Each push increments the patch version (Z)

## File Structure

- `README.md` - Your resume content in Markdown
- `resumeStyle.css` - Styling for the PDF output
- `markdownToPdf.ts` - TypeScript code that converts Markdown to PDF
- `output/` - Directory where PDFs are generated
- `.github/workflows/` - GitHub Actions workflow configuration

## Notes

- The PDF generation uses Puppeteer to create a high-quality PDF
- The styling is optimized for PDF output, not GitHub display
- Each release includes a versioned PDF file
- The repository homepage shows the raw Markdown content 