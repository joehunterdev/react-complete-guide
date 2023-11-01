import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
    marginBottom: 5,
    color: "#ccc",
  },
  containerExperience: {
    margin: 10,
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

//https://img.icons8.com/material/200/03f8bd/source-code.png
//https://img.icons8.com/material/200/03f8bd/services.png
//https://img.icons8.com/material/200/03f8bd/console.png

const Experience = ({ period, jobTitle, companyName }) => {
  return (
    <View style={styles.containerExperience}>
      <View style={styles.postionInfo}>
        <Text style={styles.text}>{period}</Text>
        <Text style={styles.text}>{jobTitle}</Text>
        <Text style={styles.text}>{companyName}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.body}>
          It was my responsibility to develop online infrastructure within CLC
          World. My projects have included Booking engines; data driven
          dashboards for Reporting, Social media and Email and involvement in
          the creative department’s Media Library. In 2018, I was privileged to
          be the creator of critical business solutions, like REST apis for lead
          actioning the company’s vital data services. At the same time, I
          continued to maintain the large fleet of company marketing sites.
        </Text>
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
            <Text>Col1</Text>
            <Text>Col1</Text>
            <Text>Col1</Text>
            <Text>Col1</Text>
            <Text>Col1</Text>
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
            <Text>Col2</Text>
            <Text>Col2</Text>
            <Text>Col2</Text>
            <Text>Col2</Text>
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
            <Text>Col3</Text>
            <Text>Col3</Text>
            <Text>Col3</Text>
            <Text>Col3</Text>
            <Text>Col3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Experience;
