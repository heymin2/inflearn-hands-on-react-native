import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Settings')} hitSlop={10}>
      <FontAwesome name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};

export default HeaderRightButton;
