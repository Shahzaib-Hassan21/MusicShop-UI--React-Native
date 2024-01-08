import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Main from '../bottom/Main'
import Search from '../bottom/Search';
import Store from '../bottom/Store';
import WishList from '../bottom/WishList';
import User from '../bottom/User';
// import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  // const reducersSelector = state => state.Reducers;
  // const reducers2Selector = state => state.Reducers2;

  // const reducersData = useSelector(reducersSelector);
  // const reducers2Data = useSelector(reducers2Selector);
  // const data = useSelector(state=>state);

  return (
    <View style={styles.conatiner}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search/>
      ) : selectedTab == 2 ? (
        <Store/>
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <User />
      )}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.bottomNav,{
            backgroundColor: selectedTab == 0 ? '#221a2e' : 'transparent',
            borderRadius: 60,
            height: 65,
            width: 65
          }]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 0 ? '#fff' : 'black'},
            ]}
            source={require('../../Images/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomNav, {
            backgroundColor: selectedTab == 1 ? '#221a2e' : 'transparent',
            borderRadius: 40,
            height: 65,
            width: 65
            }]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 1 ? '#fff' : 'black'},
            ]}
            source={require('../../Images/search.png')}
          />
        </TouchableOpacity>
        <View style={[styles.centerView, ,{
            backgroundColor: selectedTab == 2 ? '#221a2e' : 'transparent',
            borderRadius: 60,
            height: 65,
            width: 65
        }]}>
          <TouchableOpacity
            style={[
              styles.centerShape,
              {tintColor: selectedTab == 2 ? '#fff' : 'black'},
            ]}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              style={styles.cartIcon}
              source={require('../../Images/store.png')}
            />
            {/* <View style={styles.cartCounter}>
              <Text style={styles.cartText}>{reducersData.length}</Text>
            </View> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.bottomNav , {
            backgroundColor: selectedTab == 3 ? '#221a2e' : 'transparent',
            borderRadius: 40,
            height: 65,
            width: 65
            }]}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 3 ? '#fff' : 'black'},
            ]}
            source={require('../../Images/heart.png')}
          />
          {/* <View style={styles.wishCounter}>
            <Text style={styles.wishText}>{reducers2Data.length}</Text>
          </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomNav, {
            backgroundColor: selectedTab == 4 ? '#221a2e' : 'transparent',
            borderRadius: 40,
            height: 65,
            width: 65
           }]}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 4 ? '#fff' : 'black'},
            ]}
            source={require('../../Images/avatar.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  bottomContainer: {
    width: '100%',
    height: 70,
    alignSelf: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#e7e1f7',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNav: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7
  },
  icon: {
    width: 24,
    height: 24,
  },
  centerView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerShape: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  cartCounter: {
    width: 18,
    height: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    top: 5,
    right: 5,
  },
  cartText: {
    fontWeight: '600',
    color: '#fff',
  },
  wishCounter: {
    width: 18,
    height: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    top: 15,
    right: 20,
  },
  wishText: {
    fontWeight: '600',
    color: '#fff',
  },
});
