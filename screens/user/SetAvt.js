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
function SetAvatar(props) {
    //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Edit avatar</Text>
        <View style={{
            marginTop: 20
        }}>
        <TouchableOpacity>
            <Text style={styles.text}>Remove current photo</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity>
            <Text style={styles.text}>Take a photo</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity>
            <Text style={styles.text}>Choose from library</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        </View>

        <TouchableOpacity 
        onPress={() => navigate('UITab')}
        style={styles.btn}>
            <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
  },
  line: {
    height: 1,
    backgroundColor: colors.opacity,
    marginTop: 20,
    marginRight: 30,
  },
  btn: {
    backgroundColor: colors.userPrimary,
    marginRight: 40,
    marginLeft: 20,
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
  }
});
export default SetAvatar;
