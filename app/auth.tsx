import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const Auth = () => {
  return (
    <View className='flex-1 bg-white'>
        <Image source={require('../assets/images/onboarding.png')} style={{height:670,width:"100%"}}/>
    </View>
  )
}

export default Auth