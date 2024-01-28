import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  ForgetGmail,
  ResetPassword,
  SignInSN,
  Complete,
  SignUpSN,
  Welcome,
  SetAvatar,
  Share,
  Success,
} from '../screens';
import UITab from './UI-tabs';
const Stack = createNativeStackNavigator();
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Welcome'} component={Welcome} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'ForgetGmail'} component={ForgetGmail} />
        <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
        <Stack.Screen name={'SignInSN'} component={SignInSN} />
        <Stack.Screen name={'Complete'} component={Complete} />
        <Stack.Screen name={'SignUpSN'} component={SignUpSN} />
        <Stack.Screen name={'Share'} component={Share} />
        <Stack.Screen name={'SetAvatar'} component={SetAvatar} />
        <Stack.Screen name={'Success'} component={Success} />
        <Stack.Screen name={'UITab'} component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
