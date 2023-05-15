import {
  Animated,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { BLACK, PRIMARY, WHITE } from '../color';

const BOTTOM = 30;
const BOTTOM_WIDTH = 60;

const InputFAB = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef(null);
  const windowWidth = useWindowDimensions().width;
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM); // 초깃값 30해야함, bottom이 30인거임
  const inputWidth = useRef(new Animated.Value(BOTTOM_WIDTH)).current; // 플러스 버튼과 같은 60, 매번 current 안붙이기 위해 current 사용

  const open = () => {
    setIsOpened(true);
    inputRef.current.focus();
  };

  const close = () => {
    setIsOpened(false);
    inputRef.current.blur();
  };

  const onPressButton = () => (isOpened ? close() : open());

  useEffect(() => {
    const show = Keyboard.addListener('keyboardWillShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height + 10); // 키보드 보일때는 키보드 높이
    });
    const hide = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardHeight(BOTTOM); // 키보드 안보일때는 원래 높이
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          styles.shadow,
          { bottom: keyboardHeight, alignItems: 'flex-start' },
          isOpened && { width: windowWidth - 20 },
        ]}
      >
        <TextInput
          ref={inputRef}
          value={text}
          onChangeText={setText}
          style={styles.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          textContentType={'none'}
          keyboardAppearance={'light'}
          returnKeyType={'done'}
          onBlur={close}
        />
      </Animated.View>

      <Pressable
        onPress={onPressButton}
        style={({ pressed }) => [
          styles.container,
          { bottom: keyboardHeight },
          pressed && { backgroundColor: PRIMARY.DARK },
        ]}
      >
        <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: BOTTOM,
    right: 10,
    width: BOTTOM_WIDTH,
    height: BOTTOM_WIDTH,
    borderRadius: BOTTOM_WIDTH / 2,
    backgroundColor: PRIMARY.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: WHITE,
    paddingLeft: 20,
    paddingRight: BOTTOM_WIDTH + 10,
  },
  shadow: {
    shadowColor: BLACK,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default InputFAB;
