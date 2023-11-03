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
} from "@react-pdf/renderer";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
// import Content from "../Content";
import TitilliumWebBlack from "./assets/fonts/TitilliumWeb-Black.ttf";
import useHttp from "./hooks/use-http";
import DownloadButton from "./Components/DownloadButton";
import Education from "./Components/Education";

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
  const [experiences, setExperiences] = useState([]);
  const [aboutDescription, setAboutDescription] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [education, setEducation] = useState([]);

  const { isLoading, error, sendRequest: fetchData } = useHttp(); // neatly unpack declare above top level

  //This is only good when state is changing here
  //Mulitple calls ?
  useEffect(() => {
    const assignData = (data) => {
      setExperiences(data.experiences);
      setAboutDescription(data.about);
      setContactInfo(data.contactInfo);
      setEducation(data.education);
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
          <Page size="A4">
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
            <Education education={education} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default App;
