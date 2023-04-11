import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <Pressable
      onPressIn={() => console.log('In')}
      onPressOut={() => console.log('Out')}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('Long')}
      delayLongPress={2000}
      //   2초 눌러야 Long 나옴
      style={({ pressed }) => [
        { backgroundColor: 'red' },
        pressed && { backgroundColor: 'orange', opacity: 0.3 },
      ]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'Default',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;

// 1. TouchableOpacity => 터치시 흐려짐
// 2. TouchableHighlight => 터치시 배경색 변경, underlayColor로 색 변경
// 3. Pressable => 터치시 아무 반응x
