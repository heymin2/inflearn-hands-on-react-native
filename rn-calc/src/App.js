import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
};

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
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                title={num.toString()}
                onPress={() => {}}
                buttonStyle={{ width: width, height: width, marginTop: 1 }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {}}
              buttonStyle={{ width: width * 2, height: width }}
            />
            <Button
              title="="
              onPress={() => {}}
              buttonStyle={{ width, height: width }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>
        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            OnPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title={Operators.MINUS}
            OnPress={() => {}}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title={Operators.PLUS}
            OnPress={() => {}}
            buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
        </View>
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
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 30,
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: {},
});
