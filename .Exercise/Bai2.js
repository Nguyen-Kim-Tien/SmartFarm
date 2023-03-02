import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Top Left</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.text}>Bottom Left</Text>
        </View>
        <View style={styles.bottomRight}>
          <View style={styles.bottomRightTop}>
            <Text style={[styles.text, styles.textBottomRight]}>
              BRight Top
            </Text>
          </View>
          <View style={styles.bottomRightBottom}>
            <Text style={[styles.text, styles.textBottomRight]}>
              BRight Bottom
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Không cần set width, height (Chiếm toàn bộ)
  },
  top: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#21a3d0",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
  },
  bottomLeft: {
    flex: 1,
    backgroundColor: "3eee85",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRight: {
    flex: 1,
  },
  bottomRightTop: {
    backgroundColor: "#ee3ee7",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRightBottom: {
    backgroundColor: "#379fd9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBottomRight: {
    color: "#fff",
  },
});
