import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../color';
import HeaderLeftButton from '../components/HeaderLeftButton';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'TODO List',
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'Home'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
