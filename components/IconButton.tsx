import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap
    label:string
    onPress: () => void
}

export default function IconButton({icon, label, onPress}:Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color={"#fff"}/>
      <Text style={styles.IconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent:'center',
        alignItems:'center'
    },
    IconButtonLabel: {
        color:"#fff",
        margin:12
    }
})