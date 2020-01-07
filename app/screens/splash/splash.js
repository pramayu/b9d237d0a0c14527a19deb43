import React, { Component } from 'react';
import {
  View, Text,
  StatusBar, Animated,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from '../../styles/sty';
import {logo_animated} from '../../utils/animated/animated.splash';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: true
    }
    this.logo_animatedSw = new Animated.Value(0);
    this.capt_animatedSw = new Animated.Value(0);
    this.scap_animatedSw = new Animated.Value(0);
    this.opacitiAnimated = new Animated.Value(0);
  };

  componentDidMount = () => {
    logo_animated(this.opacitiAnimated, this.logo_animatedSw, this.capt_animatedSw, this.scap_animatedSw, 2);
    setTimeout(() => {
      if (this.state.redirect === true) {this.props.navigation.navigate('CheckRefreshToken')}
    }, 1500)
  };

  render () {

    var logoanimatedSty = this.logo_animatedSw.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-100, 20, 0]
    });

    var captanimatedSty = this.capt_animatedSw.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-100, 20, 0]
    });

    var saptanimatedSty = this.scap_animatedSw.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [100, -20, 0]
    });

    return (
      <View style={[style.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Animated.View style={{transform: [{translateY: logoanimatedSty}], opacity: this.opacitiAnimated}}>
          <Ionicons name="ios-flash" size={52} color="#444" style={{marginBottom: 5}}/>
        </Animated.View>
        <Animated.Text style={[style.logo_font, {color: '#444', fontSize: 24, letterSpacing: 4, marginBottom: 5, transform: [{translateX: captanimatedSty}], opacity: this.opacitiAnimated}]}>EDNATION</Animated.Text>
        <Animated.Text style={[{color: '#444', fontSize: 12, fontFamily: 'Brandon_Regular', letterSpacing: 1, transform: [{translateX: saptanimatedSty}], opacity: this.opacitiAnimated}]}>EDUCATION WITHOUT LIMIT</Animated.Text>
      </View>
    )
  }
}

export default SplashScreen;
