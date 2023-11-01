import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const AboutMe = () => {
  return (
    <Text>
      Web developer specializing in front end development. Experienced with all
      stages of the development cycle for dynamic web projects. Well-versed in
      numerous languages including HTML5, PHP, JavaScript, CSS, MySQL. With a
      strong background in project management and as a team player. More details
      about my projects and experiences can be found here joehunter.es on my
      website.
    </Text>
  );
};

export default AboutMe;
