import React from "react";
import { View, StyleSheet, Image, Text, Link } from "@react-pdf/renderer";
import ProfileImage from "../assets/image/cv-square.jpg";
import headerBackground from "../assets/image/code-bkg.jpg";
import "../assets/css/joehunter.css";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 5,
  },
  containerHeader: {
    // backgroundImage: headerBackground,
    // backgroundSize: "cover",
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    maxHeight:"20%",
    display: "block",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flexGrow: 1,
    textAlign: "center",
  },
  borderCircle: {
    border: "8px solid #999",
    borderRadius: "75%",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.8)",
    background: "none",
  },
});

const Header = () => (
  <View style={styles.containerHeader}>
    <Image src={headerBackground} style={styles.containerHeader} />

    <View style={{ width: "30%" }}>
      <Image
        style={styles.borderCircle}
        src={ProfileImage}
      />
    </View>
    <View style={{ width: "70%" }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          Joe Hunter
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, textAlign: "center" }}>Web Developer</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ marginRight: 10 }}>
            <Link
              src="https://github.com/joehunterdev"
              style={{ textDecoration: "none" }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20, borderRadius: "50%" }}
                  src="https://img.icons8.com/material-outlined/96/000000/github.png"
                />
                <Text style={{ fontSize: 10 }}>GitHub</Text>
              </View>
            </Link>
          </View>
          <View style={{ marginRight: 10 }}>
            <Link
              src="https://www.facebook.com/joe.hunter.dev"
              style={{ textDecoration: "none" }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20, borderRadius: "50%" }}
                  src="https://img.icons8.com/material-outlined/96/000000/facebook.png"
                />
                <Text style={{ fontSize: 10 }}>Facebook</Text>
              </View>
            </Link>
          </View>
          <View>
            <Link
              src="https://www.linkedin.com/in/joseph-hunter-594832220/"
              style={{ textDecoration: "none" }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 20, height: 20, borderRadius: "50%" }}
                  src="https://img.icons8.com/material-outlined/96/000000/linkedin.png"
                />
                <Text style={{ fontSize: 10 }}>LinkedIn</Text>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default Header;
