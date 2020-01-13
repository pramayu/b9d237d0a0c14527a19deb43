import {
  createAppContainer, createSwitchNavigator
 } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
// introScreenPath
import SplashScreen       from '../screens/splash/splash';
import SignUpScreen       from '../screens/signup/signup';
import SignInScreen       from '../screens/signin/signin';
import DiscoverSchool     from '../screens/discoverschool/discoverschool';
import VerifyUser         from '../screens/verify/verify';
import Discoverclass      from '../screens/discoverclass/discoverclass';
import FocusIn            from '../screens/dashboard/focus-in/focusin';

// check token
import CheckRefreshToken  from '../screens/checktoken/checktoken';

// dashboard
import Dashboard          from '../screens/dashboard/index';

const introScreenPath = createStackNavigator({
  SignInScreen        : {
    screen: SignInScreen
  },
  SignUpScreen        : {
    screen: SignUpScreen
  },
  VerifyUser          : {
    screen: VerifyUser
  },
  DiscoverSchool      : {
    screen: DiscoverSchool
  },
  Discoverclass       : {
    screen: Discoverclass
  }
}, {
  headerMode: 'none',
});

const loggedScreenath = createStackNavigator({
  Dashboard           : {
    screen: Dashboard
  },
  FocusIn             : {
    screen: FocusIn
  }
}, {
  headerMode: 'none'
});


export var MainRoute = createAppContainer(createSwitchNavigator({
  SplashScreen        : { screen: SplashScreen },
  CheckRefreshToken   : { screen: CheckRefreshToken },
  IntroScreenPath     : { screen: introScreenPath },
  Dashboard           : { screen: loggedScreenath }
}));
