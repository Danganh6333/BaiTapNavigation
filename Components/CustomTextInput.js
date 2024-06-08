import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextInput = ({title,onChangeText,secureTextEntry}) => {
  return (
    <View style={{
        marginBottom: 16,
      }}>
        <Text style={{
          fontSize: 17,
          fontWeight: '500',
          color: '#222',
          marginBottom: 8
        }}>{title}</Text>
        <TextInput
         secureTextEntry={secureTextEntry}
          style={{
            height: 44,
            backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 16,
            borderRadius: 12,
            fontSize: 15,
            fontWeight: '500'
          }}
          placeholderTextColor='#6b7280'
          onChangeText={onChangeText}
        />
      </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})