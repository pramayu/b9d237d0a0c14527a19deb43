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
     this.slideformUp = new Animated.Value(0);
     this.slideformDw = new Animated.Value(0);
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
    Animated.timing(this.slideformUp, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start((e) => {
      this.setState({slideactive: true})
      this.slideformDw.setValue(0);
    });
  }

  _keyboardDidHide = () => {
    Animated.timing(this.slideformDw, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start((e) => {
      this.setState({slideactive: false})
      this.slideformUp.setValue(0);
    });
  }

  setFieldRecord = (name, value) => {
    this.props.setFieldRecord(name, value)
  }

  setHandleStore = async() => {
    await this.props.setHandleStore()
  }

   render () {
     var slideformUp = this.slideformUp.interpolate({
       inputRange: [0, 1],
       outputRange: [0, -height / 3.3]
     });
     var slideformDw = this.slideformDw.interpolate({
       inputRange: [0, 1],
       outputRange: [-height / 3.3, 0]
     });
     return (
       <Animated.View style={{transform: [{translateY: this.state.slideactive === false ? slideformUp : slideformDw}],width: '100%', paddingHorizontal: 20, marginTop: 30, backgroundColor: '#ffffff'}}>
         <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
           <Ionicons name="ios-finger-print" size={22} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
           <TextInput onChangeText={(email) => this.setFieldRecord('email', email)}
           keyboardType="email-address" autoCorrect={false} autoCapitalize="none" autoCompleteType="off" placeholder="Email Address." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
         </View>
         <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
           <Ionicons name="ios-lock" size={24} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
           <TextInput onChangeText={(password) => this.setFieldRecord('password', password)}
           secureTextEntry={true} placeholder="Password." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
         </View>
         <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
           <Ionicons name="ios-call" size={22} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
           <TextInput onChangeText={(phone) => this.setFieldRecord('phone', phone)}
           keyboardType="phone-pad" autoCorrect={false} autoCapitalize="none" autoCompleteType="off" placeholder="Phone No." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
         </View>
         <View style={{marginTop: 30}}>
           <TouchableOpacity onPress={(e) => this.setHandleStore()}
           style={{width: '100%', height: 40, borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
             <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>SIGN UP</Text>
           </TouchableOpacity>
         </View>
         <View style={{alignItems: 'flex-end', marginTop: 20}}>
           <TouchableOpacity>
             <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#7f8082'}}>Already have an account?</Text>
           </TouchableOpacity>
         </View>
       </Animated.View>
     )
   }
 }

 export default Form;
