import { Image, StyleSheet, Text, View } from 'react-native'
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'ivory' }}>
      <View style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
        <Image source={{ uri: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg' }} style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.7,
        }} />

        <View style={{
          flex: 1,

          justifyContent: 'center',
        }}>
          <Image source={require("../Assets/logo.png")} style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 20,
          }} />
          <Text style={styles.text}>Họ Tên: Cao Hải Đăng</Text>
          <Text style={styles.text}>Mã SV: PH33497</Text>
          <Text style={styles.text}>Lớp : MD18403</Text>
        </View>

      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    marginStart: 143,
    fontWeight: 'bold',
    marginVertical: 5,
  }
})