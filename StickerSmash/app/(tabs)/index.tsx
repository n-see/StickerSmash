import { Text, View, StyleSheet } from "react-native";


export default function HomeScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Welcome CodeStack Students</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2292e',
    justifyContent: "center"
  },
  text: {
    color: "#fff",
  }
})
