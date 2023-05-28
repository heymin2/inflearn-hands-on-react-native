import { StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';
import Button from './components/Button';

const init = { count: 0 };

const CountType = {
  INCREMENt: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const reducer = (state, action) => {
  switch (action.key) {
    case CountType.INCREMENt:
      //   return state + action.value;
      state.count = state.count + 1;
      return state; // 화면 변경되지 않음, 값은 변경됨
    case CountType.DECREMENT:
      //   return state - action.value;
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerTest = () => {
  const [result, dispatch] = useReducer(reducer, init);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.count}</Text>
      <Button
        title={'+'}
        onPress={() => dispatch({ key: CountType.INCREMENt, value: 2 })}
      />
      <Button
        title={'-'}
        onPress={() => dispatch({ key: CountType.DECREMENT, value: 1 })}
      />
    </View>
  );
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
