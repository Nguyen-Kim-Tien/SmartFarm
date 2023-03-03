import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
  container: {
    flex: 1, //Không cần set width, height (Chiếm toàn bộ)
    backgroundColor: color.background,
  },

  body: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 18,
  },

  header: {
    fontSize: 24,
    color: color.primary,
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
  },
});

export default styles;
