import React, {Component} from 'react';
import {
  Animated, Easing
} from 'react-native';


export var logo_animated = (opaciti, component1, component2, component3, value) => {
  Animated.parallel([
    Animated.timing(opaciti, {
      toValue: 1,
      duration: 600,
      delay: 150,
      useNativeDriver: true,
    }),
    Animated.timing(component2, {
      toValue: value,
      easing: Easing.elastic(2),
      duration: 600,
      delay: 200,
      useNativeDriver: true,
    }),
    Animated.timing(component3, {
      toValue: value,
      easing: Easing.elastic(2),
      duration: 600,
      delay: 250,
      useNativeDriver: true,
    }),
    Animated.timing(component1, {
      toValue: value,
      easing: Easing.elastic(2),
      duration: 600,
      delay: 200,
      useNativeDriver: true,
    })
  ]).start();
}
