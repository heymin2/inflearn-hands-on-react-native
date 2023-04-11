import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return <Text>{title}</Text>;
};

Button.defaultProps = {
  title: 'Default',
};
// props의 값을 전달하지 않더라도 문제가 되지 않거나 우리가 원하는 특정 값으로 나타나길 원하는 경우
Button.PropTypes = {
  title: PropTypes.string.isRequired,
  //   설정한 타입으로 지정되지 않은 경우, 오류가 뜬다. isRequired의 경우 지정되지 않은 경우 오류가 뜬다.
};

export default Button;
