import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


var array = [1, 2, 3, 4, 5];
var jsonX = [
  { "name": "John", "age": 30 },
  { "name": "Jane", "age": 25 },
  { "name": "Doe", "age": 22 }
];

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList
        data={jsonX}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <Text>{item.name},{item.age}</Text>
        )}
      /> 

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});