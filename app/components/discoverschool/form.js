import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideactive   : false,
      accountype    : '',
      schoolID      : '',
      school        : []
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

 UNSAFE_componentWillReceiveProps = (nextProps) => {
   this.setState({
     school     : nextProps.school ? nextProps.school : [],
     schoolID   : nextProps.school ? nextProps.school.schoolcode : '',
     accountype : nextProps.accountype ? nextProps.accountype : 'student'
   })
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
   this.props.setHandleField(name, value)
 }

 setHandleCheck = async() => {
   await this.props.setHandleCheck()
 }

 setHandleFinish = async() => {
   await this.props.setHandleFinish()
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
      paddingHorizontal: 20, marginTop: 50, backgroundColor: '#ffffff', height: height / 2}}>
        {
          this.props.accountype === 'student' ?
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
            <Ionicons name="ios-filing" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
            <TextInput onChangeText={(identity) => this.setHandleField('identity', identity)} placeholder="SchoolID_studentID" placeholderTextColor="#444" 
            style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
          </View> : this.props.accountype === 'teacher' ?
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
            <Ionicons name="ios-filing" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
            <TextInput placeholder="SchoolID_teacherID" placeholderTextColor="#444" 
            style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
          </View> : null
        }
        {
          this.state.school.id ? 
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
            <Ionicons name="ios-keypad" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
            <TextInput editable={false} placeholder="School Identity." placeholderTextColor="#444" value={this.state.schoolID} 
            style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
          </View> : null
        }
        <View style={{marginTop: 30}}>
          {
            this.state.school.id ? 
            <TouchableOpacity onPress={(e) => this.setHandleFinish()} style={{flexDirection: 'row',width: '100%', height: 40,
            borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
              <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>FINISH</Text>
              <Ionicons name="ios-arrow-round-forward" size={24} color="#ffffff" style={{marginLeft: 10}}/>
            </TouchableOpacity> :
            <TouchableOpacity onPress={(e) => this.setHandleCheck()} style={{flexDirection: 'row',width: '100%', height: 40,
            borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
              <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>CHECK</Text>
              <Ionicons name="ios-arrow-round-forward" size={24} color="#ffffff" style={{marginLeft: 10}}/>
            </TouchableOpacity>
          }
        </View>
      </Animated.View>
    )
  }
}

export default Form;
