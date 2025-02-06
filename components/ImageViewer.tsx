import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

// type Props = {
//     imgSource: string
// }

interface Props {
    imgSource: string
}

export default function ImageViewer({imgSource}:{imgSource:String}) {
  return (
    <Image source={imgSource} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 420,
        borderRadius: 18,
    }
})