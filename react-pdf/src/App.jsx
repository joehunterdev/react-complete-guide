import "./App.css";
import { useState, useEffect } from "react";
import {
  PDFViewer,
  Page,
  Document,
  View,
  Font,
  StyleSheet,
  Text,
  Image,
} from "@react-pdf/renderer";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
// import Content from "../Content";
import TitilliumWebBlack from "./assets/fonts/TitilliumWeb-Black.ttf";
import useHttp from "./hooks/use-http";
import DownloadButton from "./Components/DownloadButton";
import Education from "./Components/Education";
import BackgroundImage from "./assets/image/background.png";
import Certificates from "./Components/Certificates";
Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

// Define your styles
const styles = StyleSheet.create({
  // page:{
  //   backgroundColor: "#606060",
  // },
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

  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#fff",
  },
  pageBackgroundContainer: {
    overflow: "hidden",
    position: "absolute",
    height: "850px",
  },
});

const App = () => {
  const [experiences, setExperiences] = useState([]);
  const [aboutDescription, setAboutDescription] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);

  const { isLoading, error, sendRequest: fetchData } = useHttp(); // neatly unpack declare above top level

  //This is only good when state is changing here
  //Mulitple calls ?
  useEffect(() => {
    const assignData = (data) => {
      setExperiences(data.experiences);
      setAboutDescription(data.about);
      setContactInfo(data.contactInfo);
      setEducation(data.education);
      setCertification(data.certification[0]); //Why first object suddenly ? State releated ?
    };

    fetchData(
      {
        url: "https://joehunter.es/data/api.php?page=curriculum-en",
      },
      assignData
    ); //call back here
  }, [fetchData]); //dependancies

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <PDFViewer style={{ width: "100%", height: "100vh" }} scale={1.2}>
        <Document>
          <Page size="A4" style={{ top: "0px", ...styles.container }}>
            <View style={styles.pageBackgroundContainer} wrap>
              <Image
                src={BackgroundImage}
                style={{ height: "840px", width: "794px" }}
              />
            </View>
            <Header />
            <AboutMe
              aboutDescription={aboutDescription}
              contactInfo={contactInfo}
            />
            <View>
              <Text style={styles.headingPrimary}>Professional Experience</Text>
            </View>
            {experiences.map((experience) => (
              <Experience
                key={experience.id + experience.company}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                summary={experience.summary}
              />
            ))}
            <Text style={styles.headingPrimary}>Education</Text>
            <Education education={education} certification={certification} />
            <Certificates certification={certification} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default App;
