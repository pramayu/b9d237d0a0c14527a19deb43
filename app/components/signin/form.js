import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');


class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      slideactive: false
    }
    this.slideup = new Animated.Value(0);
    this.slidedw = new Animated.Value(0);
  }

  componentDidMount = () => {
   this.keyboardDidShowListener = Keyboard.addListener(
     'keyboardDidShow',
     this._keyboardDidShow,
   );
   this.keyboardDidHideListener = Keyboard.addListener(
     'keyboardDidHide',
     this._keyboardDidHide,
   );
 }

 componentWillUnmount = () => {
   this.keyboardDidShowListener.remove();
   this.keyboardDidHideListener.remove();
 }

 _keyboardDidShow = () => {
   Animated.timing(this.slideup, {
     toValue: 1,
     duration: 400,
     useNativeDriver: true
   }).start((e) => {
     this.setState({slideactive: true})
     this.slidedw.setValue(0);
   });
 }

 _keyboardDidHide = () => {
   Animated.timing(this.slidedw, {
     toValue: 1,
     duration: 400,
     useNativeDriver: true
   }).start((e) => {
     this.setState({slideactive: false})
     this.slideup.setValue(0);
   });
 }

  setHandleField = (name, value) => {
    this.props.setHandleField(name,value)
  }

  setHandleCompare = async() => {
    await this.props.setHandleCompare()
  }

  render () {
    var slideupSty = this.slideup.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -height / 3]
    });
    var slidedwSty = this.slidedw.interpolate({
      inputRange: [0, 1],
      outputRange: [-height / 3, 0]
    })
    return (
      <Animated.View style={{transform: [{translateY: this.state.slideactive === false ? slideupSty : slidedwSty}], width: '100%',
        paddingHorizontal: 20, marginTop: 50, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
          <Ionicons name="ios-finger-print" size={22} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
          <TextInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" onChangeText={(email) => this.setHandleField('email', email)}
            autoCompleteType="off" placeholder="Email Address." placeholderTextColor="#444" 
            style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
        </View>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
          <Ionicons name="ios-lock" size={24} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
          <TextInput secureTextEntry={true} placeholder="Password." placeholderTextColor="#444" onChangeText={(password) => this.setHandleField('password', password)}
          style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={(e) => this.setHandleCompare()} style={{width: '100%', height: 40, borderRadius: 6, justifyContent: 'center',
            alignItems: 'center', backgroundColor: '#3951b4'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 20}}>
          <TouchableOpacity>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#7f8082'}}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

export default Form;
