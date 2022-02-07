import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  const [clicked, setClicked] = useState(false)

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: clicked ? 'orange' : 'wheat',
      // alignItems: 'left',
      justifyContent: 'center',
      width: 300,
      height: 300,
      padding: 10,
      // marginLeft: '10%'
    },
  });

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
          <Text style={{fontSize: 20}}>Hi, my name is Devin!</Text>
          <Text>This is my first React Native app!</Text>
          <Button title={clicked ? 'nice' : 'click me'} onPress={() => setClicked(true)} />
        </View>
      </View>
      <StatusBar />
    </>
  );
}

