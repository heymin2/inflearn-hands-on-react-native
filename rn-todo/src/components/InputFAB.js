import {
  Animated,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { BLACK, PRIMARY, WHITE } from '../color';
import PropTypes from 'prop-types';

const BOTTOM = 30;
const BOTTOM_WIDTH = 60;
const RIGHT = 10;

const InputFAB = ({ onInsert, isBottom }) => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef(null);
  const windowWidth = useWindowDimensions().width;
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM); // 초깃값 30해야함, bottom이 30인거임
  const inputWidth = useRef(new Animated.Value(BOTTOM_WIDTH)).current; // 플러스 버튼과 같은 60, 매번 current 안붙이기 위해 current 사용
  const buttonRotaion = useRef(new Animated.Value(0)).current;
  const spin = buttonRotaion.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '315deg'],
  });
  const buttonRight = useRef(new Animated.Value(RIGHT)).current;

  useEffect(() => {
    Animated.timing(buttonRight, {
      toValue: isBottom ? RIGHT - BOTTOM_WIDTH : RIGHT,
      useNativeDriver: false,
    }).start();
  }, [isBottom, buttonRight]);

  const open = () => {
    setIsOpened(true);
    Animated.timing(inputWidth, {
      toValue: windowWidth - 20,
      useNativeDriver: false, // 레이아웃 변경하는 애니메이션 효과에서는 반드시 false. width를 변경 = 레이아웃 변경.
      duration: 300, // 애니메이션 시간. default값은 500
    }).start(() => {
      inputRef.current.focus(); // 애니메이션이 끝나고 포커즈가 가도록 설정
    });
    Animated.spring(buttonRotaion, {
      toValue: 1,
      useNativeDriver: false,
      bounciness: 20, // 값이 클수록 스프링이 많이 튐
    }).start();
  };

  const close = () => {
    setIsOpened(false);
    Animated.timing(inputWidth, {
      toValue: BOTTOM_WIDTH,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      inputRef.current.blur();
      setText('');
    });
    Animated.spring(buttonRotaion, {
      toValue: 0,
      useNativeDriver: false,
      bounciness: 20,
    }).start();
  };

  const onPressButton = () => (isOpened ? close() : open());
  const onPressInsert = () => {
    const task = text.trim();
    if (task) {
      onInsert(task);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
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
    }
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          styles.shadow,
          {
            bottom: keyboardHeight,
            alignItems: 'flex-start',
            width: inputWidth,
            right: buttonRight,
          },
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
          onSubmitEditing={onPressInsert}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            bottom: keyboardHeight,
            transform: [{ rotate: spin }],
            right: buttonRight,
          },
        ]}
      >
        <Pressable
          onPress={onPressButton}
          style={({ pressed }) => [
            styles.container,
            { right: 0 },
            pressed && { backgroundColor: PRIMARY.DARK },
          ]}
        >
          <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
        </Pressable>
      </Animated.View>
    </>
  );
};

InputFAB.propTypes = {
  onInsert: PropTypes.func.isRequired,
  isBottom: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
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
