import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import FirstList from '../../data/FirstList';
import SecondList from '../../data/SecondList';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const renderItem = ({item}) => (
    <Pressable
      style={[
        styles.flatListItem,
        {backgroundColor: selectedImage === item.id ? 'purple' : 'white'},
      ]}
      onPress={() => {
        setSelectedImage(item.id);
      }}>
      <Image
        style={[
          styles.flatListImage,
          selectedImage === item.id && {tintColor: 'white'},
        ]}
        source={item.image}
      />
    </Pressable>
  );

  const renderNewestItem = ({item}) => (
    <TouchableOpacity 
    onPress={()=>{
      // console.log('SelectedItem:', item)
      setSelectedImage(item.id)
      navigation.navigate('DetailScreen', { selectedItem: item})
    }}
    style={styles.newestItem}>
      <Image style={styles.newestItemImage} source={item.image} />
      <Text style={styles.newestItemName}>{item.name}</Text>
      <Text style={styles.newestItemPrice}>{item.Price}</Text>
    </TouchableOpacity>
  );

  return (

    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.homeText}>Explore</Text>
        <View style={styles.bannerView}>
          <Text style={styles.bannerText}>FLat 35% Off</Text>
          <Pressable style={styles.bannerBtn}>
            <Text style={styles.btnText}>Shop Now</Text>
          </Pressable>
          <Image
            style={styles.bannerBlob}
            source={require('../../Images/blob.png')}
          />
          <Image
            style={styles.bannerImg}
            source={require('../../Images/headphone.png')}
          />
        </View>
        <FlatList
          horizontal
          data={FirstList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.listtextView}>
          <Text style={styles.listText}>Newest</Text>
        </View>
        <FlatList
          data={SecondList}
          renderItem={renderNewestItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.newestFlatListContainer}
          /> 
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbd1eb',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    left: 25,
    top: 20,
  },
  bannerView: {
    backgroundColor: '#221a2e',
    borderRadius: 20,
    top: 30,
    height: '20%',
    width: '85%',
    alignSelf: 'center',
  },
  bannerText: {
    fontSize: 20,
    color: 'white',
    left: 20,
    top: 25,
  },
  bannerBtn: {
    backgroundColor: '#dbd1eb',
    borderRadius: 10,
    width: '40%',
    left: 20,
    top: 40,
  },
  btnText: {
    padding: 9,
    color: 'black',
    alignSelf: 'center',
    fontWeight: '600',
  },
  bannerBlob: {
    height: 230,
    width: 150,
    position: 'absolute',
    right: -10,
    bottom: -45,
  },
  bannerImg: {
    height: 120,
    width: 120,
    position: 'absolute',
    right: 0,
    bottom: 6,
  },
  flatListContainer: {
    marginTop: 45,
    marginLeft: 15,
    height: 130,
  },
  flatListItem: {
    borderWidth: 1,
    borderRadius: 30,
    borderRadius: 30, // for oval shape
    borderColor: '#f2f0f5',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 43,
    width: 90,
  },
  flatListImage: {
    resizeMode: 'contain',
    width: 53,
  },
  listtextView: {
    bottom: 1,
  },
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#221a2e',
    left: 25,
  },
  newestFlatListContainer: {
    marginHorizontal: 15,
    paddingBottom: 100  
  },
  newestItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 25,
    margin: 10,
    padding: 20,
    backgroundColor: '#f2f0f5',
    borderRadius: 10,
    elevation: 1,
  },
  newestItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  newestItemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    right: 43,
    marginTop: 10,
  },
  newestItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    right: 37,
    marginTop: 5,
  },
});

