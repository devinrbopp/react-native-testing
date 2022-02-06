import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, my name is Devin!</Text>
      <Text>This is my first React Native app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    // alignItems: 'left',
    justifyContent: 'center',
    marginLeft: '10%'
  },
});
