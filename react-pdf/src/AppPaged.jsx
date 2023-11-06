import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
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
import { useTranslation } from "react-i18next";
import i18n from "./util/il8next";
import BackgroundImage from "./assets/image/background.png";
import ProfileImage from "./assets/image/cv-square_300x300.jpg";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
//TODO: Add heading
//TODO: Define diminsions in px
//TODO: Test dimensions

//Define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#ccc",
  },
  pageBackgroundContainer: {
    position: "absolute",
    height: "800px",
  },
  pdfViewer:{
     width: "100%", height: "100vh", 
  },
  page: {
    top: "0px",
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#ccc",
  },
  heading: {
    color: "green",
  },
});

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    fetchData(lng); // call fetchData with the new language
  };

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  const [experiences, setExperiences] = useState([]);
  const [aboutDescription, setAboutDescription] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);

  useEffect(() => {
    const assignData = (data) => {
      setExperiences(data.experiences);
      setAboutDescription(data.about);
      setContactInfo(data.contactInfo);
      setEducation(data.education);
      setCertification(data.certification[0]);
    };

    const language = i18n.language || "en"; // get the current language
    const url = `https://joehunter.es/data/api.php?page=curriculum-${language}`; // construct the URL
    fetchData({ url }, assignData);
  }, [fetchData, i18n.language]);

  return (
    <div className="App">
      <PDFViewer style={styles.pdfViewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={ProfileImage} />
            </View>
            <Header />
            <AboutMe
              aboutDescription={aboutDescription}
              contactInfo={contactInfo}
            />
            {experiences.length > 0 && (
              <Experience
                period={experiences[0].period}
                title={experiences[0].title}
                company={experiences[0].company}
                description={experiences[0].description}
                summary={experiences[0].summary}
              />
            )}
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={ProfileImage} />
            </View>
            {experiences.slice(1, 4).map((experience, index) => (
              <Experience
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                summary={experience.summary}
              />
            ))}
          </Page>
          <Page size="A4" sstyle={styles.page}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={ProfileImage} />
            </View>
            {experiences.slice(4, 5).map((experience, index) => (
              <Experience
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                summary={experience.summary}
              />
            ))}
            <Text style={styles.headingPrimary}>{t("education")}</Text>
            <Education education={education} certification={certification} />
            <Certificates certification={certification} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default App;
