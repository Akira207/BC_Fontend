import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack'; // Sử dụng 'pdfjs-dist/webpack' để import PDF.js
import 'pdfjs-dist/web/pdf_viewer.css';

const PdfViewer = ({ url, scale = 1 }) => {
    const pdfContainerRef = useRef(null);

    useEffect(() => {
        const loadPdf = async () => {
            const loadingTask = pdfjsLib.getDocument(url);
            const pdf = await loadingTask.promise;

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                pdfContainerRef.current.appendChild(canvas);

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                await page.render(renderContext).promise;
            }
        };

        loadPdf();
    }, [url, scale]);

    return <div ref={pdfContainerRef} />;
};

export default PdfViewer;