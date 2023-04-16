import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);
  const width = (useWindowDimensions().width - 5) / 4;
  console.log(width);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}></View>
          <Button
            title="1"
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
          />
          <Button
            title="2"
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
          />
          <Button
            title="3"
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
          />
          <Button
            title="4"
            onPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
          />
          <View style={styles.bottom}></View>
        </View>
        <View style={styles.operator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 30,
  },
  leftPad: {},
  number: {},
  bottom: {
    flexDirection: 'row',
  },
  operator: {},
});
