import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { type ImageSource } from "expo-image";
import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";
import { setShouldAnimateExitingForTag } from "react-native-reanimated/lib/typescript/core";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";


const placeHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  
  const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    })
    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result)
    }else{
      alert("You did not select an image")
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }
  
  const onAddSticker = () => {

  }

  const onSaveImageAsync = async () => {

  }
  const onModalClose = () => {

  }

  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        {/* <Image source={placeHolderImage} style={styles.image}/> */}
        <ImageViewer imgSource={selectedImage || placeHolderImage}/>
      </View>
      
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
            </View>
          </View>
        ):(
        
      <View style={styles.footerContainer}>
        <Button onPress={pickImageAsync} label="Choose a photo" theme="primary"/>
        
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
)}
  <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
    <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
  </EmojiPicker>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
    justifyContent:"center"

  },
    image: {
      width: 320,
      height: 440,
      borderRadius: 18
    },
    imageContainer: {
      flex: 1
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
      
    },
    optionsContainer: {
      position: 'absolute',
      bottom: 80,
    },
    optionsRow: {
      alignItems: "center",
      flexDirection: "row",
    }
})