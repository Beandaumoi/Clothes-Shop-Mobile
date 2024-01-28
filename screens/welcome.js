import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors, icons} from '../constants';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;
function Welcome(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://media.makeameme.org/created/yay-welcome.jpg'}}
      />
      <Text style={styles.text}>WELCOME :3</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Login');
        }}
        style={styles.buttonBackground}>
        <Text style={styles.buttonText}>Get started</Text>
        <Image style={styles.rightArrow} source={icons.rightArrow} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4186CE',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  text: {
    marginVertical: 100,
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.white,
  },
  buttonBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 25,
    paddingHorizontal: 80,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    marginRight: 50,
  },
  rightArrow: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
  },
});
export default Welcome;
