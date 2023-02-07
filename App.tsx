import './src/lib/dayjs';

import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Landing';
import './assets/splash.png'
import { Home } from './src/screens/Home';
export default function App() {
  const [FontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
  });

  if(!FontsLoaded){
    return(
      <Loading/>
    )
  }

  return (
    <>
      <Home/>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </>
  );
}