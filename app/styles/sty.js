import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

export var style = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#ffffff'
  },
  logo_font: {
    fontFamily: 'Brandon_Bold',
  }
});
