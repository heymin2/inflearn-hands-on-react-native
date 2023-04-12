import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>{result}</Text>
      <Button
        title="+"
        onPress={() => {
          setResult(result + 1);
        }}
        buttonStyle={{ width: 100, height: 100, marginBottom: 10 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <Button
        title="-"
        onPress={() => {
          setResult(result - 1);
        }}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />
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
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'blue',
  },
});
