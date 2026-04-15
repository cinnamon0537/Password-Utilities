const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ size: 'A4', margin: 48 });
doc.pipe(fs.createWriteStream('PROJECT_WORKFLOW.pdf'));

function heading(text) {
  doc.moveDown(0.5);
  doc.fontSize(16).fillColor('#111827').text(text);
  doc.moveDown(0.3);
}

function bullets(lines) {
  doc.fontSize(11).fillColor('#111827');
  lines.forEach((line) => doc.text(`- ${line}`, { indent: 8, width: 500 }));
  doc.moveDown(0.5);
}

function screenshotPlaceholder(label) {
  const x = doc.x;
  const y = doc.y;
  doc.roundedRect(x, y, 500, 90, 8).strokeColor('#9ca3af').lineWidth(1).stroke();
  doc.fontSize(10).fillColor('#6b7280').text(label, x + 12, y + 36, { width: 476, align: 'center' });
  doc.moveDown(5);
}

doc.fontSize(22).fillColor('#111827').text('Password Utilities - Project Workflow');
doc.moveDown(0.3);
doc.fontSize(11).fillColor('#374151').text('npm package: @cinnamon05370/password-utilities');
doc.moveDown(0.8);

heading('Setup');
bullets([
  'Initialized the project with npm.',
  'Added Jest as the test runner.',
  'Structured the package for npm publishing.',
]);
screenshotPlaceholder('Screenshot placeholder: project setup and package.json');

heading('Implementation - 1.0.0');
bullets([
  'Implemented generateStrongPassword and isStrongPassword.',
  'Published the first package version to npm.',
]);
screenshotPlaceholder('Screenshot placeholder: 1.0.0 implementation and tests');

heading('Fix - 1.1.0');
bullets([
  'Updated generateStrongPassword to retry until the output is strong.',
  'Added a deterministic Jest test for the retry behavior.',
  'Kept the validator unchanged and verified both exports with Jest.',
]);
screenshotPlaceholder('Screenshot placeholder: fixed generateStrongPassword and passing tests');

heading('Testing');
bullets([
  'npm test passes locally.',
  'Final test suite contains 3 tests covering generation and validation.',
]);
screenshotPlaceholder('Screenshot placeholder: passing Jest output');

heading('Published Versions');
bullets([
  'v1.0.0: https://www.npmjs.com/package/@cinnamon05370/password-utilities/v/1.0.0',
  'v1.1.0: https://www.npmjs.com/package/@cinnamon05370/password-utilities/v/1.1.0',
]);
screenshotPlaceholder('Screenshot placeholder: npm package pages for 1.0.0 and 1.1.0');

doc.end();
