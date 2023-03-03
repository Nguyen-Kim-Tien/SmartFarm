import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#21a3d0",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: "#21a3d0",
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 22,
    color: "#fff",
  },
});

export default styles;
