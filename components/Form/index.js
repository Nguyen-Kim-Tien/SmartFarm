import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

export default function Form(props) {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Vui lòng nhập 1 task");
      return false;
    }
    props.onAddTASK(task);
    setTask("");
    Keyboard.dismiss();
  };
  const onChangeText = (text) => {
    setTask(text);
  };
  return (
    <KeyboardAvoidingView style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={onChangeText}
        placeholder="Your Task ... "
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}> + </Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
