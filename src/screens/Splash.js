import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('Home')
    },3000)
  },[])
  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#fff'
      }} 
    >
      <StatusBar
        hidden
      />
      <Image
        source={{uri:'https://asset.brandfetch.io/idB8rIxvvo/idBNValPgc.jpeg'}}
        style={{
          width:'100%',
          height:250,
          resizeMode:'contain'
        }}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})