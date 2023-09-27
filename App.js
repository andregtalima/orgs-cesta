import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import mocks from './src/mocks/cesta'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';



export default function App() {
  const [fontLoaded] = useFonts({
    'montserratRegular': Montserrat_400Regular,
    'montserratBold': Montserrat_700Bold,
    'montserratItalic': Montserrat_400Regular_Italic
  });

  if (!fontLoaded) {
    return <View />
  }

  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta {...mocks}/>
    </SafeAreaView>
  );
}