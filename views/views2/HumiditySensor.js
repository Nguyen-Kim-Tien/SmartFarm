import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const HumiditySensor = () => {
  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate("Detail");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/301632140_1448536232323376_1500603615049683013_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yyqrNnS37uQAX_711RT&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDtS7b9pERnmN5-mJtJH6J13Ss2HDlvfKjWeQMYWYC2eQ&oe=64175225",
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userInfoText}>IceTea</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.redText}>Humidity sensor</Text>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={styles.text} onPress={handleDetail}>
            Humidity sensor 1
          </Text>
          <Icon name="keyboard-arrow-right" size={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={styles.text}>Humidity sensor 2</Text>
          <Icon name="keyboard-arrow-right" size={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
          <Text style={styles.text}>Humidity sensor 3</Text>
          <Icon name="keyboard-arrow-right" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D47",
  },
  header: {
    flexDirection: "column",
    flex: 2,
    marginTop: 50,
  },
  userInfo: {
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#202020",
  },
  userInfoText: {
    fontSize: 20,
    color: "#fff",
  },
  userAvatar: {
    width: 55,
    height: 55,
    borderRadius: 40,
    marginRight: 15,
  },
  content: {
    flex: 6,
    marginHorizontal: 20,
  },
  redText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
    color: "#fff",
  },
  icon: {
    color: "#ccc",
  },
});

export default HumiditySensor;
