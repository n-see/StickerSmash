import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{title: "Oops! You did it again"}}/>
        <View style={styles.container}>
        <Link href={"/(tabs)/index"} style={styles.button}>Go back to the home Screen</Link>
        </View>
    
    </>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: "center",
        justifyContent:"center"
    
      },
      text: {
        color: "#fff",
      },
      button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff"
        }
})