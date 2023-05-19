import { Keyboard, StyleSheet, View } from 'react-native';
import Input, { InputTypes } from '../components/Input';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextButton from '../components/TextButton';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation(); // navigation으로도 가능한데 navigate만 필요하니까 {navigate}만 받아옴

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <View style={[styles.container, { paddingTop: top }]}>
        <Input
          inputType={InputTypes.EMAIL}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          onSubmitEditing={() => passwordRef.current.focus()}
          styles={{ container: { marginBottom: 20 } }}
        />
        <Input
          ref={passwordRef}
          inputType={InputTypes.PASSWORD}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          onSubmitEditing={onSubmit}
          styles={{ container: { marginBottom: 20 } }}
        />
        <Button
          title={'SIGNIN'}
          disabled={disabled}
          isLoading={isLoading}
          onPress={onSubmit}
          styles={{ container: { marginTop: 20 } }}
        />
        <TextButton
          title={'SIGNUP'}
          onPress={() => {
            navigate(AuthRoutes.SIGN_UP);
          }}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
});

export default SignInScreen;
