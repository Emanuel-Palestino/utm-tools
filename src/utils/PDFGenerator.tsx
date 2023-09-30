import {FC, ReactNode} from 'react';
import generatePDF, { Margin } from 'react-to-pdf';

interface optionsProps
{
   children: ReactNode;
   options:
   {
      // default is `save`
      method: 'save',
      // default is Resolution.MEDIUM = 3, which should be enough, higher values
      // increases the image quality but also the size of the PDF, so be careful
      // using values higher than 10 when having multiple pages generated, it
      // might cause the page to crash or hang.
      page: {
         // margin is in MM, default is Margin.NONE = 0
         margin: Margin.MEDIUM,
         // default is 'A4'
         format: 'letter'
      }
   }
}




// you can use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById('content-id');

export const PDFGenerator: FC<optionsProps> = ({options, children}) => {
   return (
      <div>
         <button onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
         <div id="content-id">
            {children}
         </div>
      </div>
   )
}
