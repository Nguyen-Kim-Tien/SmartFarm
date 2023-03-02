import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e7feff",
    flex: 1, //Không cần set width, height (Chiếm toàn bộ)
  },
  containerTop: {
    flex: 1,
  },
  containerCenter: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
  },

  top: {
    backgroundColor: "pink",
    marginTop: 20,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "red",
  },

  topText: {
    fontSize: 20,
    color: "blue",
  },

  center: {
    width: 150,
    height: 150,
    backgroundColor: "#33ff60",
    borderRadius: 100,
    justifyContent: "center", // 2 dòng này giúp cho chữ center nằm chính giữa hình tròn
    alignItems: "center", // // 2 dòng này giúp cho chữ center nằm chính giữa hình tròn
  },

  centerText: {
    fontSize: 20,
    color: "blue",
  },

  bottom: {
    backgroundColor: "#7ee6fd",
    marginTop: 80,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 18,
  },
  bottomText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "right",
  },
});
