import React from "react";
import { View, Text, StyleSheet, Font, Link } from "@react-pdf/renderer";
import TitilliumWebBlack from "../assets/fonts/TitilliumWeb-Black.ttf";

Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

//Secondary title font
import TitilliumWebSemiBold from "../assets/fonts/TitilliumWeb-SemiBold.ttf";

Font.register({
  family: "TitilliumWeb-SemiBold",
  src: TitilliumWebSemiBold,
});

const styles = StyleSheet.create({
  containerContactInfo: {
    flex: 1.3,
    flexDirection: "column",
    fontSize: 12,
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 400,
  },
  headingPrimary: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "TitilliumWeb-Black",
  },
  row: {
    flexDirection: "row",
  },
  colLeft: {
    flex: 0.7,
    fontWeight: "700",
  },
  colRight: {
    flex: 2.3,
    fontWeight: "400",
    color: "rgba(3, 248, 189, 0.9)",
    fontSize:10
  },
});
//BUG: The email link is spilling over @ 12 font size
const ContactInfo = ({ contactInfo }) => {
  return (
    <View style={styles.containerContactInfo}>
      <Text style={styles.headingPrimary}>Contact Info</Text>
      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Text>Tel:</Text>
        </View>
        <View style={styles.colRight}>
          <Text>{contactInfo.tel} </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Text>Email:</Text>
        </View>
        <View style={styles.colRight}>
          <Link style={{ display: "inline", color: "#8869b4"}}>
            {contactInfo.email}
          </Link>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colLeft}>
          <Text>Addr:</Text>
        </View>
        <View style={styles.colRight}>
          <Text>{contactInfo.address}</Text>
        </View>
      </View>
    </View>
  );
};
//
export default ContactInfo;
