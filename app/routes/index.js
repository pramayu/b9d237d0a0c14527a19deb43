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
import Event              from '../screens/dashboard/event/event';
import ClassRoom          from '../screens/dashboard/classroom/classroom';
// classroom
import Schedule           from '../screens/dashboard/classroom/schedule/schedule';
import Books              from '../screens/dashboard/classroom/books/book';
import Task               from '../screens/dashboard/classroom/task/task';
import Report             from '../screens/dashboard/classroom/report/report';
import QuizStudent        from '../screens/dashboard/classroom/quiz/quiz';
import Discuss            from '../screens/dashboard/classroom/discuss/discuss';
import Audiobook          from '../screens/dashboard/classroom/audiobook/audiobook';
//Counseling
import Counseling         from '../screens/dashboard/classroom/counseling/couseling';
import UserChat           from '../screens/dashboard/classroom/counseling/chat';

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
  },
  Event               : {
    screen: Event
  },
  ClassRoom           : {
    screen: ClassRoom
  },
  Schedule            : {
    screen: Schedule
  },
  Books               : {
    screen: Books
  },
  Task                : {
    screen: Task
  },
  Report              : {
    screen: Report
  },
  QuizStudent         : {
    screen: QuizStudent
  },
  Discuss             : {
    screen: Discuss
  },
  Audiobook             : {
    screen: Audiobook
  },
  Counseling            : {
    screen: Counseling
  },
  UserChat              : {
    screen: UserChat
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
