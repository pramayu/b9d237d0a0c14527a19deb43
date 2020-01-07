import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TouchableOpacity, StatusBar
} from 'react-native';
import compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { style } from '../../styles/sty';
import Header from '../../components/signin/header';
import Form from '../../components/signin/form';
import { API_CHECKUSER } from '../../api/api_users';


var {width, height} = Dimensions.get('window');

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email     : '',
      password  : '',
      errors    : {}
    },
    this.setHandleField     = this.setHandleField.bind(this);
    this.setHandleCompare   = this.setHandleCompare.bind(this);
  };

  setHandleField = (name, value) => {
    this.setState({
      [name]: value
    })
  };

  setHandleCompare = async() => {
    if(this.state.email.length !== 0 && this.state.password.length !== 0) {
      const rs = await this.props.checkuserlog({
        variables: {
          email     : this.state.email,
          password  : this.state.password
        }
      });
      const { status, errorpath, infopath, refreshtoken } = rs.data.checkuserlog;
      if(status === true) {
        await AsyncStorage.setItem('refreshtoken', refreshtoken);
        this.props.navigation.navigate('CheckRefreshToken')
      } else {
        const errors = {};
        errors[`${errorpath}`] = infopath;
        this.setState({
          email     : '',
          password  : '',
          errors
        })
      }
    } else {
      console.log('hello world');
    }
  };

  render() {
    return (
      <View style={[style.container,{paddingHorizontal: 20}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Header />
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
          <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
        </View>
        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 32, color: '#444', marginTop: 10}}>Welcome Back</Text>
        <View style={{paddingRight: '40%'}}>
          <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>
            Discover various kinds of knowledge and improve your self.
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '100%', marginTop: height / 11, paddingHorizontal: 20}}>
          <View style={{borderTopLeftRadius: 6, borderBottomLeftRadius: 6, width: '50%',height: 40, justifyContent: 'center', flexDirection: 'row',
            borderWidth: 1, borderColor: '#dbd9d9', alignItems: 'center'}}>
            <Ionicons name="logo-facebook" size={24} color="#3951b4" style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingLeft: 5}}>FACEBOOK</Text>
          </View>
          <View style={{borderTopRightRadius: 6, borderBottomRightRadius: 6, width: '50%', height: 40, justifyContent: 'center',
            flexDirection: 'row', borderWidth: 1, borderColor: '#dbd9d9', borderLeftWidth: 0, alignItems: 'center'}}>
            <Ionicons name="logo-google" size={22} color="#e04b50" style={{alignSelf: 'center'}}/>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingLeft: 5}}>GOOGLE</Text>
          </View>
        </View>
        <Form setHandleField={this.setHandleField} setHandleCompare={this.setHandleCompare} />
      </View>
    )
  }
};

export default compose(
  graphql(API_CHECKUSER, {name: 'checkuserlog'})
)(SignInScreen);
