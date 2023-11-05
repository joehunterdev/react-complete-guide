import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { cleanText, getFilenameFromUrl } from "../util/utils";

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
    padding: 4,
    border: "1px solid #ccc",
    width: "30%",
  },
  containerCertificates: {
    textAlign: "left",
    flexDirection: "row",
  },
  certImage: {
    width: "180px",
  },
});

const Education = ({ education }) => {

  if (!education || education.length === 0) {
    
    return null;
  }
  
  return (
    <>
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
      <View style={styles.containerCertificates} wrap={false}>
        {education.certificateImages && education.certificateImages.length > 0 && (
          <>
            {education.certificateImages.map((url, index) => (
              <Image
                key={index}
                src={`../src/assets/image/certs/${getFilenameFromUrl(url)}`}
                style={styles.certImage}
              />
            ))}
          </>
        )}
      </View>
    </>
  );
};

export default Education;
