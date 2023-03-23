import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Xử lý đăng nhập tại đây
    navigation.navigate("Option");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập tài khoản</Text>
      <View style={styles.form}>
        <Text style={styles.bigTitle}>Chào mừng</Text>
        <Text style={styles.formTitle}>Đăng nhập tài khoản của bạn</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Mật khẩu:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.createAccount}>
            Bạn chưa có tài khoản. Tạo ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F1D47",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
    flex: 2,
    marginTop: 50,
    color: "#fff",
  },

  bigTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  form: {
    alignSelf: "stretch",
    flex: 5,
  },
  formTitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#29B6F6",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: "right",
    color: "red",
  },
  createAccount: {
    marginTop: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
