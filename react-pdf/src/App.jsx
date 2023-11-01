import DownloadButton from "./Components/DownloadButton";
// import DownloadButton from "./Components/DownloadButton";
import Test from "./Components/Test";
import "./App.css";
import { PDFViewer, Page, Document, Text, View } from "@react-pdf/renderer";
import Header from "./Components/Header";
const App = () => {
  return (
    <div className="App">

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
