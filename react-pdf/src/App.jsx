import DownloadButton from "./Components/DownloadButton";
// import DownloadButton from "./Components/DownloadButton";
import Test from "./Components/Test";
import "./App.css";
import { PDFViewer, Page, Document, Text, View } from "@react-pdf/renderer";
import Header from "./Components/Header";
const App = () => {
  return (
    <div className="App">
      {/* <DownloadButton />
      <Test />   */}
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4">
            <Header />          
          </Page>
        </Document>
      </PDFViewer>
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
