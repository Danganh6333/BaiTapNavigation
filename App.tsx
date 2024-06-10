import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Screens/Home'
import Introduction from './Screens/Introduction'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './Screens/Welcome'
import Login from './Screens/Login'
import { createStackNavigator } from '@react-navigation/stack'
import CustomDrawerContent from './Components/CustomDrawerContent'
import AddProduct from './Screens/AddProduct'

const App = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={CustomDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const CustomDrawer = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>} >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Introduction' component={Introduction} options={{ title: "Giới thiệu" }} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})