import DownloadButton from "./Components/DownloadButton";

import "./App.css";
import { PDFViewer, Page, Document,View,Font,StyleSheet,Text } from "@react-pdf/renderer";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";

import TitilliumWebBlack from "./assets/fonts/TitilliumWeb-Black.ttf";

Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});
// Define your styles
const styles = StyleSheet.create({

  headingPrimary: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Black",
  },
  headingSecondary: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "TitilliumWeb-SemiBold",
  },
});

const App = () => {
  return (
    <div className="App">
      <PDFViewer style={{ width: "100%", height: "100vh" }} scale={1.2}>
        <Document>
          <Page size="A4">
            <Header />
            <AboutMe />
            <View>
              <Text style={styles.headingPrimary}>Professional Experience</Text>
            </View>
            <Experience period="JUNE 2015 - NOVEMBER 2021" jobTitle="Web Developer" companyName="CLC World Resorts & Hotels"/>
           </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default App;
