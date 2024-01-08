import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.conatiner}>
        <Image
        style={styles.headerImg}
        source={require('../Images/menu.png')}
        />
      <View style={styles.header}>
        <Image 
        style={styles.centerImg}
        source={require('../Images/music.png')} />
        <Text style={styles.headerText}>Music Shop</Text>
      </View>
      <Image
      style={styles.headerImg}
      source={require('../Images/search.png')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    conatiner:{
        flex: 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    centerImg:{
        height: 20,
        width: 20
    },
    header:{
        top: 20,
        flexDirection: 'row'
    },
    headerImg:{
        height: 20,
        width: 20,
        marginHorizontal: 10,
        top: 20
    },
    headerText:{
      fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        left: 10
    }
})
