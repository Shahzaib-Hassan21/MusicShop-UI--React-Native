import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import DetailHeader from '../../components/DetailHeader';
import {useRoute} from '@react-navigation/native';
import SliderData from '../../data/SliderData';
import Swiper from 'react-native-swiper';
import BottomDetailScreen from './BottomDetailScreen';

const DetailScreen = () => {
  const route = useRoute();
  const selectedItem = route.params?.selectedItem || null;

  if (!selectedItem) {
    // Handle the case where selectedItem is not available
    return null;
  }

  // Find the index of the selected item in SliderData
  const selectedIndex = SliderData.findIndex((item) => item.id === selectedItem.id);


  return (
    <>
      <DetailHeader />
      <View style={styles.innerContainer}>
        <Swiper
          showsPagination={false}
          showsButtons={true}
          nextButton={
            <View style={styles.arrowImageContainer}>
              <Image
                source={require('../../Images/right.png')}
                style={styles.arrowImage}
              />
            </View>
          }
          prevButton={
            <View style={styles.arrowImageContainer}>
              <Image
                source={require('../../Images/left.png')}
                style={styles.arrowImage}
              />
            </View>
          }
          index={selectedIndex} // Set the initial index to the selected item
          >
          {SliderData.map((item) => (
          <View style={styles.slide} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>{item.Price}</Text>
          </View>
          ))}
        </Swiper>
      </View>
      <BottomDetailScreen/>
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
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 130,
    height: 150,
  },
  arrowImageContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
  arrowImage: {
    height: 20,
    width: 20,
  },
 
});
