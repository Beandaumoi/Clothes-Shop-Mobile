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
import {isValidGmail, isValidPassword} from '../../validations/validations';
function Login(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  const [errorGmail, setErrorGmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidOk = () =>
    gmail.length > 0 &&
    password.length > 0 &&
    isValidGmail(gmail) === true &&
    isValidPassword(password) === true;

  const [inputLineColor, setInputLineColor] = useState(colors.inactive);
  const [inputLineColor2, setInputLineColor2] = useState(colors.inactive);
  const customOnFocus = () => {
    props?.onFocus;
    setInputLineColor(colors.primary);
  };

  const customOnBlur = () => {
    props?.onBlur;
    setInputLineColor(colors.inactive);
  };

  const customOnFocus2 = () => {
    props?.onFocus;
    setInputLineColor2(colors.primary);
  };

  const customOnBlur2 = () => {
    props?.onBlur;
    setInputLineColor2(colors.inactive);
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image style={styles.headingImage} source={images.avatar} />
        <Text style={styles.headingFirstText}>Welcome!</Text>
        <Text style={styles.headingSecondText}>Login</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentFirst}>
          <TouchableOpacity
            onPress={() => {
              navigate('Welcome')
            }}
            style={styles.contentFirstSupport}>
            <Image style={styles.contentFirstImage} source={icons.back} />
          </TouchableOpacity>
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
          <Text style={styles.contentSecondText}>Password</Text>
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) === true
                  ? ''
                  : 'Password not correct the format',
              );
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder=" Type something"
            placeholderTextColor={colors.inactive}
            onBlur={customOnBlur2}
            onFocus={customOnFocus2}
            style={{
              borderBottomWidth: 2,
              borderBottomColor: inputLineColor2,
              marginRight: 30,
              paddingBottom: 5,
              fontSize: 16,
              fontWeight: '300',
            }}
          />
          <Text style={styles.inputIncorrect}>{errorPassword}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}></View>
            <TouchableOpacity onPress={() => {
              navigate('ForgetGmail')
            }}>
              <Text style={styles.contentForgetPassword}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentThird}>
          <TouchableOpacity
            onPress={() => {
              navigate('UITab');
            }}
            disabled={isValidOk() === false}
            style={
              isValidOk() === true
                ? styles.contentThirdButton
                : styles.contentThirdButtonDisabled
            }>
            <Text style={styles.contentThirdText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigate('SignInSN');
            }}
            style={styles.contentThirdButton2}>
            <Text style={styles.contentThirdText2}>
              Login with social media
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have any account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate('Register');
            }}>
            <Text style={styles.footerPick}>Sign Up</Text>
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  contentFirst: {
    marginLeft: 50,
    marginTop: 40,
    marginRight: 25,
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
  contentSecondText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  contentForgetPassword: {
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 10,
    color: colors.inactive,
  },
  contentThird: {
    marginTop: 70,
    marginLeft: 25,
    marginRight: 25,
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
  contentThirdButtonDisabled: {
    backgroundColor: colors.inactive,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  contentThirdButton2: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  contentThirdText: {
    padding: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  contentThirdText2: {
    padding: 20,
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
export default Login;
