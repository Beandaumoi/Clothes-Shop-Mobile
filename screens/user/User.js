import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import {colors, icons, images} from '../../constants';
import {UIHeader} from '../../components';
import EachItem from './EachItem';
function User(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
      <UIHeader title={'My Account'} iconRight2={icons.setting} />
      <ScrollView style={{marginTop: 20}}>
        <View style={styles.userBackground}>
          <View style={styles.avatarBackground}>
            <Image style={styles.avatar} source={images.avatar} />
          </View>
          <Pressable
            onPress={() => navigate('SetAvatar')}
            style={styles.setAvatarBackground}>
            <Image style={styles.setAvatar} source={icons.pen} />
          </Pressable>
          <Text style={styles.userName}>Đào Đức Mạnh</Text>
        </View>
        <Pressable onPress={() => alert ('ok')}>
        <EachItem icon={icons.user} title={'My detail'} />
        </Pressable>
        <EachItem icon={icons.home} title={'Address book'} />
        <EachItem icon={icons.creditCard} title={'Payment methods'} />
        <EachItem icon={icons.bell} title={'Notifications'} />
        <EachItem icon={icons.message} title={'Contact preferences'} />
        <View style={styles.line}></View>
        <EachItem icon={icons.gift} title={'Gift cards & vouchers'} />
        <View style={styles.line}></View>
        <EachItem icon={icons.question} title={'Need help?'} />
        <EachItem icon={icons.star} title={'Rate this app'} />
        <EachItem icon={icons.wrench} title={'Help improve this app'} />
        <View style={styles.line}></View>
        <EachItem icon={icons.info} title={'Privacy Policy'} />
        <EachItem icon={icons.info} title={'Terms & Conditions'} />
        <Pressable
          onPress={() => navigate('Login')}
          style={styles.logoutBackground}>
          <Image style={styles.logout} source={icons.logout} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 55,
    backgroundColor: colors.white,
  },
  userBackground: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  avatarBackground: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.userPrimary,
  },
  setAvatar: {
    width: 15,
    height: 15,
    tintColor: colors.white,
  },
  setAvatarBackground: {
    position: 'absolute',
    bottom: 50,
    left: 215,
    padding: 4,
    backgroundColor: colors.userPrimary,
    borderRadius: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  line: {
    borderWidth: 1,
    borderColor: colors.inactive,
    marginTop: 20,
    borderStyle: 'dashed',
    marginLeft: 40,
    marginRight: 30,
  },
  logoutBackground: {
    flexDirection: 'row',
    backgroundColor: '#FBE0D9',
    alignSelf: 'baseline',
    marginLeft: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 60,
  },
  logout: {
    width: 25,
    height: 25,
    tintColor: colors.userPrimary,
  },
  logoutText: {
    color: colors.userPrimary,
    alignSelf: 'center',
    marginLeft: 10,
  },
});
export default User;
