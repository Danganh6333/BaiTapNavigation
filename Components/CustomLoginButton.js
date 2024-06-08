import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const CustomLoginButton = ({title,onPress}) => {
  return (
    <View style={{
        marginVertical: 24
      }}>
        <TouchableOpacity onPress={onPress}>
          <View style={{
            backgroundColor: '#075eec',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#075eec',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20

          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#fff'
            }}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default CustomLoginButton
