import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return(
  <>
    <StatusBar style="light"/>
    <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerTitle: "Sticker Smash",
          headerShown: false
        }}/>
        <Stack.Screen name="+not-found"/>
    </Stack>
  </>
    )
}
