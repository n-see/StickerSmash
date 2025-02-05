import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return(
  
  <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Sticker Smash",
        headerLeft: () => <></>
      }}/>
      <Stack.Screen name="+not-found"/>
  </Stack>
    )
}
