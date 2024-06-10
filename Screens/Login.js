import { Button, Image, Modal, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomTextInput from '../Components/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import CustomLoginButton from '../Components/CustomLoginButton'

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showModal, setShowModal] = useState(false)

  const LoginButton = () => {
    if (email != "admin" && password != "admin") {
      setShowModal(true)
    } else {
      navigation.navigate('Drawer');
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        padding: 24,
        flex: 1,
      }}>
        <View style={{ marginVertical: 30 }}>
          <Image source={require("../Assets/logo.png")}
            style={{
              height: 80,
              width: 80,
              alignSelf: 'center',
              marginBottom: 36
            }}
          />
          <Text style={{
            fontSize: 27,
            fontWeight: '700',
            color: '#lelele',
            marginBottom: 6,
            textAlign: 'center'
          }}>Đăng Nhập</Text>
        </View>
        <View style={{
          marginBottom: 24,
          flex: 1,

        }}>
          <CustomTextInput title="Tên Người Dùng" onChangeText={(txt) => setEmail(txt)} secureTextEntry={false} />
          <CustomTextInput title="Mật Khẩu" onChangeText={(txt) => setPassword(txt)} secureTextEntry={true} />
          <CustomLoginButton title="Login" onPress={LoginButton} />
        </View>
      </View>
      <Modal visible={showModal} transparent={true}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{
            backgroundColor: 'white',
            width: 300,
            borderRadius: 12,
            padding: 20,
            alignItems: 'center',
          }}>
            <Text style={{
              marginBottom: 20,
              textAlign: 'center',
              fontSize: 16,
            }}>Bạn đã nhập sai vui lòng nhập lại</Text>
            <View style={{ width: '100%' }}>
              <Button style={{ paddingHorizontal: 23, borderRadius: 30 }} onPress={() => setShowModal(false)} title='Tắt' color="#FF6347" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>

  )
}

export default Login
