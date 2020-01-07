import React, { Component } from 'react';
import {
  View, Text,
  StatusBar, Dimensions
} from 'react-native';
import compose    from 'lodash.flowright';
import {graphql}  from 'react-apollo';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import { style }  from '../../styles/sty';
import Header     from '../../components/signup/header';
import Form       from '../../components/signup/form';
import {API_CREATEUSER} from '../../api/api_users';

var {width, height} = Dimensions.get('window');

class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email     : '',
      password  : '',
      phone     : '',
      errors    : {}
    }
  }

  setFieldRecord = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  setHandleStore = async() => {
    const rs = await this.props.createuser({
      variables: {
        email     : this.state.email,
        password  : this.state.password,
        phone     : this.state.phone
      }
    })
    const {status, errorpath, infopath} = rs.data.createuser;
    if(status === true) {
      this.setState({
        email     : '',
        password  : '',
        phone     : '',
      });
      this.props.navigation.push('VerifyUser')
    } else if(status === false){
      const errors = {};
      errors[`${errorpath}`] = infopath;
      this.setState({
        errors
      })
    }
  }

  render () {
    return (
      <View style={[style.container,{paddingHorizontal: 20}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Header />
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
          <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
        </View>
        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 36, color: '#444', marginTop: 10}}>Sign Up</Text>
        <View style={{paddingRight: '45%'}}>
          <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>Be part of an Education community Without Limits.</Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', marginTop: height / 11, paddingHorizontal: 20}}>
          <View style={{borderTopLeftRadius: 6, borderBottomLeftRadius: 6, width: '50%',height: 40, justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#dbd9d9', alignItems: 'center'}}>
            <Ionicons name="logo-facebook" size={24} color="#3951b4" style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingLeft: 5}}>FACEBOOK</Text>
          </View>
          <View style={{borderTopRightRadius: 6, borderBottomRightRadius: 6, width: '50%', height: 40, justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#dbd9d9', borderLeftWidth: 0, alignItems: 'center'}}>
            <Ionicons name="logo-google" size={22} color="#e04b50" style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingLeft: 5}}>GOOGLE</Text>
          </View>
        </View>
        <Form setFieldRecord={this.setFieldRecord} setHandleStore={this.setHandleStore}/>
      </View>
    )
  }
}

export default compose(
  graphql(API_CREATEUSER, {name: 'createuser'})
)(SignUpScreen);
