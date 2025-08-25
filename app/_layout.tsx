
import * as Font from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from 'react';


export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf'),
        'Inter18Medium': require('../assets/fonts/Inter_18pt-Medium.ttf')
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}


