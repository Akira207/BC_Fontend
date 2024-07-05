const path = require('path');
const { override, useBabelRc, addWebpackAlias } = require('customize-cra');

module.exports = override(
    useBabelRc(),
    addWebpackAlias({
        'pdfjs-dist/build/pdf.worker': path.join(__dirname, 'node_modules/pdfjs-dist/build/pdf.worker.min.js'),
    }),
);
