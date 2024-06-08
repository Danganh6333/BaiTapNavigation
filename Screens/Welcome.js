import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (props) => {
    const {navigation} = props;
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigation.navigate('Login');
      }, 4000);
      return () => clearTimeout(timeout);
    }, []);
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})