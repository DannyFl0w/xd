import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-web';
import Stress from './components/abc';


var array = [1, 2, 3, 4, 5];
var jsonX = [
  { "name": "John", "age": 30 },
  { "name": "Jane", "age": 25 },
  { "name": "Doe", "age": 22 }
];



const Card = ({ name, age }) => {
  return (
    <View style={{ padding: 10, margin: 10, backgroundColor: '#f9c2ff' }}>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

const MyComponent = () => {
  return (
    <View>
      {jsonX.map((item, index) => (
        <Card key={index} name={item.name} age={item.age} />
      ))}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList
        data={jsonX}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
            <View>
              <Text>{item.name},{item.age}</Text>
              <Button 
                title="Click Me"
                onPress={() => alert(`Hello ${item.name}`)}
                color ="#7d3c98"
                />
            </View>
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