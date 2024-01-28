import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Checkbox from 'react-native-check-box';
import {colors, icons} from '../../constants';
import {isValidGmail} from '../../validations/validations';
import {UIInput} from '../../components';
function Register(props) {
  //navigation
  const {navigation, route} = props;
  //function of navigate to/back
  const {navigate, goBack} = navigation;

  const [errorGmail, setErrorGmail] = useState('');

  const [gmail, setGmail] = useState('');

  const [isChecked, setIsChecked] = useState(false);

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
        <Text style={styles.headingFirstText}>Welcome!</Text>
        <Text style={styles.headingSecondText}>Sign Up</Text>
      </View>

      <View style={styles.content}>
        <ScrollView>
          <View style={styles.contentFirst}>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}
              style={styles.contentFirstSupport}>
              <Image style={styles.contentFirstImage} source={icons.back} />
            </TouchableOpacity>
            <UIInput title={'First Name'} />
            <UIInput title={'Last Name'} />
            <View style={{marginTop: 10}}>
              <Checkbox
                isChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                rightText="Sign Up for Newsletter"
                rightTextStyle={{
                  fontSize: 16,
                  fontWeight: '300',
                  color: colors.black,
                }}
                uncheckedCheckBoxColor={colors.inactive}
                checkedCheckBoxColor={colors.primary}
              />
            </View>
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
            <UIInput
              title={'Password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
            />
            <UIInput
              title={'Confirm Password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.contentThird}>
            <TouchableOpacity
              onPress={() => {
                navigate('Complete');
              }}
              style={styles.contentThirdButton}>
              <Text style={styles.contentThirdText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate('SignUpSN');
              }}
              style={styles.contentThirdButton2}>
              <Text style={styles.contentThirdText2}>
                Sign up with social media
              </Text>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 50,
                marginTop: 20,
              }}>
              <Text>
                By continuing, you agree to our{' '}
                <Text
                  style={styles.policyText}
                  onPress={() => alert('You pressed Terms')}>
                  Terms of Service
                </Text>{' '}
                and acknowledge that our{' '}
                <Text
                  style={styles.policyText}
                  onPress={() => alert('You pressed Policy')}>
                  Privacy Policy
                </Text>{' '}
                applies to you.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('Login');
              }}>
              <Text style={styles.footerPick}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    marginRight: 25,
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
    marginLeft: 20,
    marginRight: 22,
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
  policyText: {
    color: colors.primary,
  },
});
export default Register;
