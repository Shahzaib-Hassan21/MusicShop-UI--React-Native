import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image
        style={styles.headerImg}
        source={require('../../Images/person.png')}
        />
        <View style={styles.header}>
        <Image 
        style={styles.img}
        source={require('../../Images/music.png')}
        />
      <Text style={styles.headerText}>Music Shop</Text>
        </View>
      <Text style={styles.innerHeader}>Search for your favorite items and enjoy music</Text>
        <Pressable 
        style={styles.bottomBtn}
        onPress={()=>{
            navigation.navigate('HomeScreen')
        }}
        >
            <Text style={styles.btnText}>Press To continue</Text>
        </Pressable>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#240a47'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
    headerText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        left: 10
    },
    innerHeader:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 70,
        padding: 20,
        width: '65%'
    },
    headerImg:{
        left: 120,
        resizeMode: 'cover',
        position: 'absolute',
        bottom: 0,
        opacity: 0.1
    },
    img:{
        tintColor: 'white',
        height: 25,
        width: 25
    },
    bottomBtn:{
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        padding: 15,
        width: '70%',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'white'
    },
    btnText:{
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})