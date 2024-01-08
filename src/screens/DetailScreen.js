import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import DetailHeader from '../../components/DetailHeader';
import {useRoute} from '@react-navigation/native';
import SliderData from '../../data/SliderData';
import Swiper from 'react-native-swiper';

const DetailScreen = () => {
  const route = useRoute();
  const selectedItem = route.params?.selectedItem || null;



  if (!selectedItem) {
    // Handle the case where selectedItem is not available
    return null;
  }

  return (
    <>
      <DetailHeader />
      <View style={styles.innerContainer}>
        <Swiper 
        showsPagination={false}
        showsButtons={true}
        nextButton={<Image source={require('../../Images/right.png')} style={styles.arrowImage}/>}
        prevButton={<Image source={require('../../Images/left.png')} style={styles.arrowImage}/>}
        >
          {SliderData.map((item)=> (
            <View key={item.id} style={styles.slide}>
              <Image source={item.image} style={styles.image}/>
              <Text>{item.name}</Text>
              <Text>{item.Price}</Text>
            </View>
          ))}
        </Swiper>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: '#dbd1eb',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
 arrowImage:{
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 20,
  backgroundColor: 'white',
  height: 20,
  width: 20,
  paddingHorizontal: 20,
  paddingVertical: 20,
  margin: 1
 }
});
