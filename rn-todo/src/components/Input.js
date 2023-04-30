import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({
  title,
  placeholder,
  //   keyboardType,
  //   returnKeyType,
  //   secureTextEntry,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        {...props} // 제일 위에 둬야함. 덮어써지지 않아야함
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'none'}
        keyboardAppearance={'light'}
        // keyboardType={keyboardType}
        // returnKeyType={returnKeyType}
        // secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

Input.defaultProps = {
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.PropTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  //   keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  //   returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  //   secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 42,
  },
});

export default Input;
