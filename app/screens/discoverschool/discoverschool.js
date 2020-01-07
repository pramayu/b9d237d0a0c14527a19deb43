import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard, StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import { style } from '../../styles/sty';
import { API_DISCOVERSCHOOL, API_CONNECTUSERSTUDENT } from '../../api/api_student';
import Header from '../../components/discoverschool/header';
import Form from '../../components/discoverschool/form';

var {height, width} = Dimensions.get('window');


class DiscoverSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountype    : 'student',
      identity      : '',
      student       : [],
      school        : []
    },
    this.setHandleField   = this.setHandleField.bind(this)
    this.setHandleCheck   = this.setHandleCheck.bind(this)
    this.setHandleFinish  = this.setHandleFinish.bind(this)
  }

  set_accountype = (type) => {
    this.setState({ accountype: type })
  }

  setHandleField = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  setHandleCheck = async() => {
    if(this.state.identity){
      const rs = await this.props.discoverschool({
        variables: {
          identity: this.state.identity,
          usertype: this.state.accountype
        }
      });
      const {status, errorpath, infopath, student} = rs.data.discoverschool;
      if (status === true) {
        this.setState({
          student : student,
          school  : student.school
        })
      }
      if (status === false) {
        this.setState({
          identity  : '',
          school    : []
        })
      }
    }
  }

  setHandleFinish = async() => {
    if(this.state.student.length !== 0){
      const rs = await this.props.connectuserstudent({
        variables: {
          usercode    : this.state.student.strid,
          fusertype    : this.state.accountype
        }
      });
      const {status, errorpath, infopath} = rs.data.connectuserstudent;
      if(status === true){
        // got to next screen
        this.props.navigation.navigate('Discoverclass');
      }
      if (status === false) {
        this.setState({
          identity  : '',
          student   : [],
          school    : []
        })
      }
    }
  }

  render() {
    return (
      <View style={[style.container, {paddingHorizontal: 20}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Header />
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
          <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
        </View>
        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 32, color: '#444', marginTop: 10}}>Discover School</Text>
        <View style={{paddingRight: '40%'}}>
          <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>Discover various kinds of knowledge and improve your self.</Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', marginTop: height / 11, paddingHorizontal: 20}}>
          <View style={{backgroundColor: this.state.accountype === 'student' ? '#FFE339' : '#ffffff',borderTopLeftRadius: 6, borderBottomLeftRadius: 6, width: '50%',height: 40, justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: this.state.accountype === 'student' ? '#FFE339' : '#FFE339', alignItems: 'center'}}>
            <Ionicons name="ios-school" size={22} color={this.state.accountype === 'student' ? '#BDA201' : '#BDA201'} style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: this.state.accountype === 'student' ? '#BDA201' : '#BDA201', paddingLeft: 5}}>STUDENT</Text>
            <TouchableOpacity onPress={(e) => {this.setState({accountype: 'student'})}} style={{width: '100%', height: '100%', position: 'absolute'}}><Text></Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor: this.state.accountype === 'teacher' ? '#FFE339' : '#ffffff', borderTopRightRadius: 6, borderBottomRightRadius: 6, width: '50%', height: 40, justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: this.state.accountype === 'teacher' ? '#FFE339' : '#FFE339', borderLeftWidth: 0, alignItems: 'center'}}>
            <Ionicons name="ios-easel" size={20} color={this.state.accountype === 'teacher' ? '#BDA201' : '#BDA201'} style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: this.state.accountype === 'teacher' ? '#BDA201' : '#BDA201', paddingLeft: 5}}>TEACHER</Text>
            <TouchableOpacity onPress={(e) => {this.setState({accountype: 'teacher'})}} style={{width: '100%', height: '100%', position: 'absolute'}}><Text></Text></TouchableOpacity>
          </View>
        </View>
        <Form accountype={this.state.accountype} setHandleField={this.setHandleField} school={this.state.school}
        setHandleCheck={this.setHandleCheck} setHandleFinish={this.setHandleFinish}/>
      </View>
    )
  }
}

export default compose(
  graphql(API_DISCOVERSCHOOL, {name: 'discoverschool'}),
  graphql(API_CONNECTUSERSTUDENT, {name: 'connectuserstudent'})
)(DiscoverSchool);
