import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import * as SpalshScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Asset } from 'expo-asset';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SpalshScreen.preventAutoHideAsync();
        await Asset.fromModule(require('../assets/cover.png')).downloadAsync(); // 캐싱
      } catch (e) {
        // eslint-disabled-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    if (isReady) {
      await SpalshScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onReady}>
      <StatusBar style={'dark'} />
      <Navigation />
    </View>
  );
};

export default App;
