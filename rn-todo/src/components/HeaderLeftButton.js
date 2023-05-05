import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

const headerLeftButton = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();
  if (!canGoBack) {
    return null;
  }
  return (
    <Pressable onPress={navigation.goBack} hitSlop={100}>
      <Entypo name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

headerLeftButton.propTypes = {
  canGoBack: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default headerLeftButton;
