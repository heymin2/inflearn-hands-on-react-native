import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import Button from './components/Button';

const init = 0;

const CountType = {
  INCREMENt: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case CountType.INCREMENt:
      return state + 1;
    case CountType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const ReducerTest = () => {
  const [result, dispatch] = useReducer(reducer, init);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result}</Text>
      <Button
        title={'+'}
        onPress={() => dispatch({ type: CountType.INCREMENt })}
      />
      <Button
        title={'-'}
        onPress={() => dispatch({ type: CountType.DECREMENT })}
      />
    </View>
  );
};

ReducerTest.propTypes = {
  //PropTypes
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ReducerTest;
