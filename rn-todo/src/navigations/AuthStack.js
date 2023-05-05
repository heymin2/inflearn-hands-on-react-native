import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import { PRIMARY, WHITE } from '../color';
import HeaderLeftButton from '../components/HeaderLeftButton';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
