import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DetailHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.goBack('Main');
        }}>
        <Image
          style={styles.topImage}
          source={require('../Images/left-arrow.png')}
        />
      </Pressable>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('../Images/music.png')}
        />
        <Text style={styles.headerText}>Music Shop</Text>
      </View>
      <Pressable>
        <Image style={styles.topImage} source={require('../Images/cart.png')} />
      </Pressable>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    flex: 0.16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 18,
    top: 15
  },
  topImage: {
    height: 24,
    width: 24,
  },
  header: {
    flexDirection: 'row',
  },
  headerImage:{
    height: 22,
    width: 22,
    
  },
  headerText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    left: 8
  }
});
