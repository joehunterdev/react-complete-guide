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
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
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
            <View>
              <Text style={styles.heading}>Page 3</Text>
              <Text style={styles.descriptionText}>
                freestar freestar What is Lorem Ipsum? Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like). Where does it come from? Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </Text>
            </View>
          </Page>
          <Page size="A4" style={styles.page}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={ProfileImage} />
            </View>
            <View>
              <Text>Page 4</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default App;
