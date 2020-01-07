import React, {Component} from 'react';
import {
  View, Text,
  Dimensions, TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from '../../styles/sty';

var {width, height} = Dimensions.get('window');

var Header = (props) => {
  return (
    <View style={{width: '100%', height: height / 15, paddingHorizontal: 20}}>
      <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
        <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
        </View>
        <View style={{width: '50%', height: '100%', justifyContent: 'center',alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Ionicons name="ios-log-out" size={20} color={props.color}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header;
