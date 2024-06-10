import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm Sản Phẩm Mới</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên Sản Phẩm"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Giá Sản Phẩm"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="URL Ảnh Sản Phẩm"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Thêm Mới</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    padding: 20,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'greenyellow',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    height: 50,
    backgroundColor: 'crimson',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
})
