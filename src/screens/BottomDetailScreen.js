import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BottomDetailScreen = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.bottomText}>Color</Text>
      </View>
    </View>
  )
}

export default BottomDetailScreen;

const styles = StyleSheet.create({
    bottomContainer:{
        flex: 1,
        backgroundColor: '#dbd1eb',
      },
      innerContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
      },
      bottomText:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
      }
})