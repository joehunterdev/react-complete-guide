import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
// import PdfDocument from './Components/PdfDocument';
import Test from './Components/Test';

const App = () => (
  <PDFViewer>
    <Test />
  </PDFViewer>
);

export default App;

// ReactPDF.render(<Test />);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
