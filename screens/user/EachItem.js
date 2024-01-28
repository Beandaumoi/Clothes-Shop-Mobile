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
function EachItem(props) {
  const {title, icon} = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconBackground}>
        <Image style={styles.icon} source={icon} />
        <View style={styles.iconNew}></View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.nextArrow} source={icons.next} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconBackground: {
    padding: 10,
    backgroundColor: '#EBF5F8',
    borderRadius: 50,
    marginLeft: 40,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: colors.primary,
  },
  iconNew: {
    position: 'absolute',
    right: 2,
    bottom: 35,
    padding: 4,
    backgroundColor: colors.userPrimary,
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 15,
    flex: 1,
    marginLeft: 20,
    fontWeight: '400',
  },
  nextArrow: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginRight: 30,
  },
});
export default EachItem;
