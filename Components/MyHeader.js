import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MyHeader = () => {
    return (
        <View style={{ width: '100%', height: 150, backgroundColor: 'aqua', paddingVertical: 15 }}>
            <Image source={require("../Assets/logo.png")} style={{ width: '100%', height: '70%', resizeMode: 'center', marginVertical: 12 }} />
            <Text style={{ fontSize: 16, fontWeight: '500', fontWeight: "bold", color: 'burlywood', textAlign: 'center' }}>Họ Tên Sinh Viên :Cao Hải Đăng </Text>
        </View>
    )
}

export default MyHeader

const styles = StyleSheet.create({})