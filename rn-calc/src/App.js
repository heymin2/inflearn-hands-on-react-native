import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const isError = false;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: 'blue',
          backgroundColor: 'black',
          padding: 10,
          borderWidth: 3,
          borderColor: 'red',
          // 인라인 스타일
        }}
      >
        rn-calc App
      </Text>
      <Text style={styles.text}>rn-calc App2</Text>
      <Text style={[styles.text, styles.error]}>error</Text>
      <Text style={[styles.text, isError && styles.error]}>error</Text>
      {/* 앞에 스타일 먼저 적용, 뒤가 덮어씀, true일때 덮어씀 */}
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
    backgroundColor: 'green',
    padding: 10,
    borderWidth: 3,
    borderColor: 'red',
  },
  error: {
    color: 'red',
  },
});
