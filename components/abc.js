import react from "react";
import {Text, Button, View, StyleSheet} from "react-native";


export default function Stress() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stress Component</Text>
      <Button
        title="Click Me"
        onPress={() => alert("Button Pressed!")}
        color="#841584"
      />
    </View>
  );
}