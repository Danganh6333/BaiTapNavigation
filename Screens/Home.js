import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const link_api = "https://66178c88ed6b8fa43482f8e7.mockapi.io/sanpham"

const Home = () => {
  const RowP = (props) => {
    let { sp } = props;
    return (
      <View style={styles.row}>
        <Image source={{ uri: sp.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{sp.name}</Text>
          <Text style={styles.priceText}>Price: {sp.price}</Text>
        </View>
        <Button title='Delete' onPress={() => deleteStuff(sp.id)} color="#ff5c5c" />
      </View>
    )
  }

  const navigate = useNavigation();
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      let rs = await fetch(link_api);
      let arr = await rs.json();
      setData(arr);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteStuff = async (id) => {
    try {
      await fetch(link_api + "/" + id, {
        method: "DELETE"
      });
      let tmp = data.filter(s => s.id !== id);
      console.log("Deleted successfully");
      setData(tmp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <CustomButton onPress={() => navigate.navigate("AddProduct")} title="Thêm Sản Phẩm" />
        <FlatList 
          data={data} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <RowP sp={item} />} 
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 16,
    color: '#888',
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
