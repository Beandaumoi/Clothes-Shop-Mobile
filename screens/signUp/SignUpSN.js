import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, icons} from '../../constants';
import {UIButtonSN} from '../../components';
function SignUpSN(props) {
  return (
    <View style={{flex: 1, marginHorizontal: 30}}>
      <View style={styles.title}>
        <Text style={styles.titleText1}>Sign up with social media</Text>
        <Text style={styles.titleText2}>
          Sign up to be used for the features, the most priority as the normal,
          the value program
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <UIButtonSN
          title={'Continue with Facebook'}
          icon={icons.facebook}
          backgroundColor={'rgb(47,81,204)'}
          backgroundIconColor={colors.white}
        />
        <UIButtonSN
          title={'Continue with Google'}
          icon={icons.google}
          backgroundColor={'rgb(202,44,41)'}
          color={colors.white}
        />
        <UIButtonSN
          title={'Continue with Apple'}
          icon={icons.apple}
          backgroundColor={colors.black}
          color={colors.white}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 5,
          marginTop: 50,
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
  );
}
const styles = StyleSheet.create({
  title: {
    marginTop: 80,
    alignItems: 'center',
  },
  titleText1: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleText2: {
    fontSize: 18,
    color: colors.inactive,
    marginTop: 15,
  },
  policyText: {
    color: colors.primary,
  },
});
export default SignUpSN;
