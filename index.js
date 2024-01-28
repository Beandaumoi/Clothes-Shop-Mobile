/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
//import UITab from './navigation/UI-tabs';
/*
import {
  Login,
  Register,
  ForgetGmail,
  ResetPassword,
  SignInSN,
  SignUpSN,
  Complete,
  Products,
  Welcome,
} from './screens';
*/
import App from './navigation/App';
AppRegistry.registerComponent(appName, () => () => <App />);
