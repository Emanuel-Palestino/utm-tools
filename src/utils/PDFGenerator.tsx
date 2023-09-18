import React, { ReactNode } from 'react';
import { usePDF } from 'react-to-pdf';

interface PDFGeneratorProps {
  children: ReactNode;
}

export const PDFGenerator: React.FC<PDFGeneratorProps> = ({ children }) => {
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   return (
      <div>
         <button onClick={() => toPDF()}>Download PDF</button>
         <div ref={targetRef}>
            {children}
         </div>
      </div>
   )
}