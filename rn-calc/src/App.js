import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>rn-calc App</Text>
      <Button
        title="button"
        color={'red'}
        onPress={() => console.log('click!')}
      />
      {/* 안드로이드는 타이틀이 대문자로 변경됨, 배경 생김, 
      title 무조건 지정해줘야함 => 버튼 구현 부분에서 검사해서 오류 뜸, 
      onPress는 require인데 지정 안해도 오류x => 버튼 구현 부분에서 검사x, 
      style props 지원 안함, 배경 변경할때 color */}
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
