import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        {/* 결과 */}
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* 버튼 */}
        <Text>button</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'blue',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
  },
});
