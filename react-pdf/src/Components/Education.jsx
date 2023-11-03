import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { cleanText } from "../util/utils";
const styles = StyleSheet.create({
  containerEducation: {
    fontSize: 12,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    margin: 10,
  },
  containerColInner: {
    flexGrow: 2,
    flexWrap: "wrap",
    padding:4,
    border:"1px solid #ccc",
    width:"30%"
  },
});

const Education = ({ education }) => {
  return (
    <View style={styles.containerEducation} wrap={false}>
      {education.map((item, index) => (
        <View key={index} style={styles.containerColInner}>
          <View>
            <Text>{item.period}</Text>
          </View>
          <View>
            <Text>{item.titled}</Text>
          </View>
          <View style={styles.containerList}>
            {item.awarded.map((award, awardIndex) => (
              <Text key={awardIndex}>{award}</Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Education;
