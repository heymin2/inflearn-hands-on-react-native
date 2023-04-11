import { Text } from 'react-native';

const Button = (props) => {
  return <Text>{props.title}</Text>;
};

export default Button;

// 우리가 만든 버튼에 props가 없어서 App.js의 Button에 있는 color, onPress 적용x
// props.title로 해주면 App.js에 있는 title인 button 글자가 <Text> 태그에 적용
// 그럼 color, onPress는 어떻게 적용?
