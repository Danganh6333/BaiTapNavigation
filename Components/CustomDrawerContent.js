import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MyHeader from './MyHeader'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
        <MyHeader/>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({})