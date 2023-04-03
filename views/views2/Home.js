import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    hour: "12:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "25°C",
  },
  {
    hour: "13:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "26°C",
  },
  {
    hour: "14:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "27°C",
  },
  {
    hour: "15:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "21°C",
  },
  {
    hour: "16:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "29°C",
  },
  {
    hour: "17:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBbYXOXm-1AnKm3Bi2KJTqkSAriQonECPdQ&usqp=CAU",
    temperature: "25°C",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleClickSetting = () => {
    navigation.navigate("SettingView2");
  };
  const handleAutomatic = () => {
    navigation.navigate("AutomaticView2");
  };
  const handleManual = () => {
    navigation.navigate("ManualView2");
  };
  const handlePrice = () => {
    navigation.navigate("Price");
  };

  const handleNews = () => {
    navigation.navigate("News");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trang chủ</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>
            Chúc một ngày mới tốt lành, IceTea
          </Text>
          <Image
            source={{
              uri: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/301632140_1448536232323376_1500603615049683013_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YEQXkLuAfogAX8O5ilP&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAWqSMXEFhp9JCszBcRnx3MES0NQDbNMM6OXJbZNTx_8w&oe=641F3B25",
            }}
            style={styles.userAvatar}
          />
        </View>
      </View>

      <View style={styles.weather}>
        <View style={styles.rectangle1}>
          <View style={styles.left}>
            <Text style={styles.label}>Nhiệt độ: 25 °C</Text>

            <Text style={styles.label}>Độ ẩm: 75 %</Text>
            <Text style={styles.label}>Cảm giác như: 26 °C</Text>
          </View>
          <Image
            style={styles.image1}
            source={{
              uri: "https://banner2.cleanpng.com/20190519/bhs/kisspng-clip-art-quotation-image-portable-network-graphics-partly-clipart-partly-cloudy-picture-157291-part-5ce18e0dd97949.3207985015582858378908.jpg",
            }}
          />
        </View>

        <ScrollView horizontal={true} style={styles.scrollView}>
          {data.map((item, index) => (
            <View key={index} style={styles.rectangle}>
              <Text style={styles.hour}>{item.hour}</Text>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.temperature}>{item.temperature}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.autoWateringContainer}>
        <View style={[styles.autoWatering, styles.autoWatering1]}>
          <Text style={styles.textWatering}>
            <Text style={styles.autoWateringTitle}>Tưới tự động</Text>
          </Text>
          <View style={styles.wateringSetting}>
            <TouchableOpacity style={styles.autoWateringButton}>
              <Text style={styles.autoWateringButtonText}>Tưới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAutomatic}>
              <Image
                source={{
                  uri: "https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png",
                }}
                style={styles.autoWateringIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.autoWatering, styles.autoWatering2]}>
          <Text style={styles.textWatering}>
            <Text style={styles.autoWateringTitle}>Tưới thủ công</Text>
          </Text>
          <View style={styles.wateringSetting}>
            <TouchableOpacity style={styles.autoWateringButton}>
              <Text style={styles.autoWateringButtonText}>Tưới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleManual}>
              <Image
                source={{
                  uri: "https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png",
                }}
                style={styles.autoWateringIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "#f2f2f2",
          paddingBottom: 10,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
          }}
          onPress={handlePrice}
        >
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
          }}
          onPress={handleNews}
        >
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 50,
            width: 60,
            height: 60,
            marginBottom: 10,
            marginTop: -20,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <FontAwesome name="home" size={36} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <FontAwesome name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
          }}
          onPress={handleClickSetting}
        >
          <FontAwesome name="gear" size={24} color="black" />
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfoText: {
    fontSize: 16,
    color: "#fff",
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  weather: {
    alignItems: "center",
    justifyContent: "center",

    flex: 4,
  },
  rectangle1: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  left: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  temperature1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
  },
  image1: {
    width: 100,
    height: 100,
  },

  rectangle: {
    width: 100,
    height: 150,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  hour: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
  },
  autoWateringContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    flex: 2,
  },
  autoWatering: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    flex: 1,
  },
  autoWatering1: { backgroundColor: "#4D6A97" },
  autoWatering2: { backgroundColor: "#78267D" },
  textWatering: {
    flex: 1,
    marginTop: 10,
    flexDirection: "column",
  },
  autoWateringTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  wateringSetting: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  autoWateringButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#48319D",
    opacity: 0.8,
    borderRadius: 10,
  },
  autoWateringButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  autoWateringIcon: {
    marginTop: 10,
    marginLeft: 30,
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    padding: 10,
    flex: 1,
  },
  bottomItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  bottomItemText: {
    fontWeight: "bold",
  },
});

export default HomeScreen;
