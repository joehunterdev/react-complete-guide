// import HtmlTest from "./Components/HtmlTest";
import PdfDocument from "./Components/PdfDocument";
import DownloadButton from "./Components/DownloadButton";
import "App.css";
import "index.css";

const App = () => {
  return (
    <div className="App">
      <DownloadButton />
      <Test />  
    </div>
  );
};

export default App;


// import "./App.css";
// import HtmlTest from "./Components/HtmlTest";
// import PdfDocument from './Components/PdfDocument';
// import { PDFDownloadLink } from "@react-pdf/renderer";

// const App = () => {
//   return (
//     <div className="App">
      
//       <PDFDownloadLink document={<PdfDocument />} filename="FORM">
//       {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
//       </PDFDownloadLink>
//       {/* <PdfDocument /> */}

//     </div>
//   );
// };

// export default App;