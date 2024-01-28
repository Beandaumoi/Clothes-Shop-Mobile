import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Products, Menu, User, SavedItem, Cart} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {colors, icons} from '../constants';
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.black,
  tabBarActiveBackgroundColor: colors.white,
  tabBarInactiveBackgroundColor: colors.white,

  tabBarBackground: () => (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}></View>
  ),

  tabBarIcon: ({focused, color, size}) => {
    /*
        const screenName = route.name
        
        const iconName = screenName == "ProductGridView" ? icons.pc :
        (screenName == "MobileList" ? icons.phone : (
            screenName == "Setting" ? icons.setting : icons.pc
        ))
        */
    return (
      <Image
        tintColor={focused ? colors.primary : colors.inactive}
        style={{
          width: 25,
          height: 25,
          resizeMode: 'contain',
          position: 'absolute',
          top: 20,
        }}
        source={
          route.name === 'Menu'
            ? icons.menu
            : route.name === 'Cart'
            ? icons.bag
            : route.name === 'SavedItem'
            ? icons.heart
            : route.name === 'User'
            ? icons.user
            : // : route.name == 'Home'
              // ? icons.home
              icons.question
        }
      />
    );
  },
});

function UITab(props) {
  return (
    <Tab.Navigator initialRouteName={'Home'} screenOptions={screenOptions}>
      <Tab.Screen
        name={'Menu'}
        component={Menu}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Cart}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 65,
                height: 65,
                backgroundColor: colors.primary,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Image
                tintColor={colors.white}
                source={icons.home}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'SavedItem'}
        component={SavedItem}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'User'}
        component={User}
        options={{
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}

function Bag() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bag</Text>
    </View>
  );
}

export default UITab;
