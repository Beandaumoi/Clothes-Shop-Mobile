import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, icons} from '../constants';
function Success(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg',
        }}
      />
      <Text style={styles.text}>Success</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Home');
        }}
        style={styles.buttonBackground}>
        <Image style={styles.rightArrow} source={icons.downArrow} />
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'green',
  },
  buttonBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    marginRight: 10,
    fontWeight: 'bold',
  },
  rightArrow: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
    transform: [{rotate: '90deg'}],
  },
});
export default Success;
