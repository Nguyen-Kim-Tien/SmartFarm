import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";

export default function Form() {
  return (
    <View style={styles.addTask}>
      <TextInput style={styles.input}></TextInput>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}> + </Text>
      </View>
    </View>
  );
}
