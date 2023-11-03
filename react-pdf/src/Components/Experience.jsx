import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { cleanText } from "../util/utils";
const styles = StyleSheet.create({
  body: {
    fontSize: 12,
    marginBottom: 5,
    color: "#ccc",
  },
  containerExperience: {
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    fontSize: 12,
  },
  containerCols: {
    flexDirection: "row",
  },
  col: {
    flexGrow: 4,
  },
  containerListHeading: {
    paddingRight: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 25,
    height: 25,
  },
  listColumnInner: {
    paddingLeft: "2%",
  },
});
//TODO: Save these icons locally
//https://img.icons8.com/material/200/03f8bd/source-code.png
//https://img.icons8.com/material/200/03f8bd/services.png
//https://img.icons8.com/material/200/03f8bd/console.png

const Experience = ({ period, title, companyName, description, summary }) => {
  return (
    <View style={styles.containerExperience} wrap={false}>
      <View style={styles.postionInfo}>
        <Text style={styles.text}>{period}</Text>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{companyName}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.body}>{cleanText(description)}</Text>
      </View>

      <View style={styles.containerCols}>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>Design:</Text>
            <Image
              src="https://img.icons8.com/material/200/03f8bd/source-code.png"
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            {summary.design.map((item, index) => (
              <Text key={index + companyName}>{item}</Text>
            ))}
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>Solutions:</Text>
            <Image
              src="https://img.icons8.com/material/200/03f8bd/services.png"
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            {summary.solutions.map((item, index) => (
              <Text key={index + companyName}>{item}</Text>
            ))}
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>Management:</Text>
            <Image
              src="https://img.icons8.com/material/200/03f8bd/console.png"
              style={styles.icon}
            />
          </View>
          <View style={styles.listColumnInner}>
            {summary.management.map((item, index) => (
              <Text key={index + companyName}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Experience;
