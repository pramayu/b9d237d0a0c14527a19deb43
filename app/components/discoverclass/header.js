import React, {Component} from 'react';
import {
  View, Text,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

var Header = () => {
  return (
    <View style={{width: width, height: height / 10}}></View>
  )
}

export default Header;
