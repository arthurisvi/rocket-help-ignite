import { NativeBaseProvider, StatusBar } from 'native-base';
import { SignIn } from './src/screens/SignIn'
import { Loading } from './src/components/Loading'
import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <NativeBaseProvider theme = {THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
