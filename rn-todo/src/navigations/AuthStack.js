import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { WHITE } from '../color';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{ contentStyle: { backgroundColor: WHITE } }}
      />
      <Stack.Screen name={'List'} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
