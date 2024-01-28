import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {images, colors, icons} from '../../constants';
import {isValidGmail} from '../../validations/validations';
function ForgetGmail(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  const [errorGmail, setErrorGmail] = useState('');

  const [gmail, setGmail] = useState('');

  const [inputLineColor, setInputLineColor] = useState(colors.inactive);
  const customOnFocus = () => {
    props?.onFocus;
    setInputLineColor(colors.primary);
  };

  const customOnBlur = () => {
    props?.onBlur;
    setInputLineColor(colors.inactive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image style={styles.headingImage} source={images.avatar} />
        <Text style={styles.headingFirstText}>Welcome!</Text>
        <Text style={styles.headingSecondText}>Forget Password?</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentFirst}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={styles.contentFirstSupport}>
            <Image style={styles.contentFirstImage} source={icons.back} />
          </TouchableOpacity>
          <Text style={styles.title}>
            Please enter your email address below to receive a password reset
            link.
          </Text>
          <Text style={styles.contentSecondText}>Gmail</Text>
          <TextInput
            onChangeText={text => {
              setErrorGmail(
                isValidGmail(text) === true
                  ? ''
                  : 'Gmail not correct the format',
              );
              setGmail(text);
            }}
            value={gmail}
            autoCapitalize="none"
            placeholder=" Type something"
            placeholderTextColor={colors.inactive}
            onBlur={customOnBlur}
            onFocus={customOnFocus}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: inputLineColor,
              marginRight: 30,
              paddingBottom: 5,
              fontSize: 16,
              fontWeight: '300',
            }}
          />
          <Text style={styles.inputIncorrect}>{errorGmail}</Text>
        </View>
        <View style={styles.contentThird}>
          <TouchableOpacity
            onPress={() => {
              navigate('ResetPassword');
            }}
            style={styles.contentThirdButton}>
            <Text style={styles.contentThirdText}>Reset my password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have any account?</Text>
          <TouchableOpacity>
            <Text
              onPress={() => {
                navigate('SignInSN');
              }}
              style={styles.footerPick}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  heading: {
    marginTop: 60,
    marginLeft: 40,
  },
  headingImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  headingFirstText: {
    color: colors.white,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  headingSecondText: {
    color: colors.white,
    fontSize: 35,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 15,
    borderRadius: 50,
  },
  contentFirst: {
    marginLeft: 50,
    marginTop: 40,
  },
  contentFirstSupport: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(231, 243, 247)',
    borderRadius: 10,
  },
  contentFirstImage: {
    width: 20,
    height: 20,
    backgroundColor: 'rgb(231, 243, 247)',
  },
  title: {
    marginTop: 20,
  },
  contentSecondText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.black,
  },
  contentThird: {
    marginTop: 70,
    marginLeft: 20,
  },
  contentThirdButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  contentThirdText: {
    padding: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 50,
  },
  footerText: {
    fontSize: 16,
    marginRight: 10,
  },
  footerPick: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(228, 82, 49)',
  },
  inputIncorrect: {
    color: 'red',
    fontSize: 12,
  },
});
export default ForgetGmail;
