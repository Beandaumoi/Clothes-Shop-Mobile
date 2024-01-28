import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {images, colors} from '../../constants';
function Complete(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.backgroundImage} />
      <Text style={styles.text}>COMPLETE SIGN UP</Text>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigate('Login');
          }}
          style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  backgroundImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  text: {
    color: colors.white,
    marginTop: 40,
    fontSize: 26,
    fontWeight: '600',
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackground: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    width: '85%',
  },
  buttonText: {
    padding: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Complete;
