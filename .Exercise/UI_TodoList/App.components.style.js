import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, //Không cần set width, height (Chiếm toàn bộ)
    backgroundColor: "#eff7f8",
  },

  body: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 18,
  },

  header: {
    fontSize: 24,
    color: "#21a3d0",
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
  },
});

export default styles;
