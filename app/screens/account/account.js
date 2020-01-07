import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard, StatusBar,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { style } from '../../styles/sty';
import Header from '../../components/account/header';

var {width, height} = Dimensions.get('window');

class AccountScreen extends Component {
  render() {
    return(
      <View style={[style.container, {backgroundColor: '#ffffff'}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Header color={"#444"}/>
        <View style={{width: '100%', height: height / 4.8, paddingHorizontal: 20, paddingTop: 10}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: width / 3.8, height: width / 3.8}}>
              <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: 1.5, borderColor: '#444'}}
                source={{uri: 'https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=766&q=80'}}/>
            </View>
            <View style={{width: width / 1.6, height: '100%', paddingLeft: 20}}>
              <Text style={{fontFamily: 'PlayfairDisplay-Regular', color: '#444', fontSize: 20}}>Luciana Zogbi</Text>
              <Text style={{fontFamily: 'Brandon_Regular', color: '#444', fontSize: 16, marginTop: 2}}>Computer Network Engineering</Text>
              <Text style={{fontFamily: 'Brandon_Regular', color: '#444', fontSize: 14}}>EXP +2400</Text>
              <TouchableOpacity>
                <Text style={{marginTop: 6, alignSelf: 'flex-start', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 4, backgroundColor: '#3951b4'}}>INVITE ME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{width: '100%', height: height / 1, backgroundColor: '#ffffff', borderRadius: 30, paddingHorizontal: 20}}>
          <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
            <View style={{width: width / 2.2, height: width / 6.5}}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '18%'}}>
                  <SimpleLineIcons name="puzzle" size={22} color="#3951b4" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
                </View>
                <View style={{width: '82%'}}>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', paddingLeft: 5}}>PROBLEM RESOLVE</Text>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: '#7f8082', paddingLeft: 5}}>EXP +1800</Text>
                </View>
              </View>
            </View>
            <View style={{width: width / 2.2, height: width / 6.5, marginLeft: 10}}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '18%'}}>
                  <SimpleLineIcons name="microphone" size={22} color="#3951b4" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
                </View>
                <View style={{width: '82%'}}>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', paddingLeft: 5}}>COMMUNICATION</Text>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: '#7f8082', paddingLeft: 5}}>EXP +1300</Text>
                </View>
              </View>
            </View>
            <View style={{width: width / 2.2, height: width / 6.5, marginLeft: 10}}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '18%'}}>
                  <SimpleLineIcons name="organization" size={22} color="#3951b4" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
                </View>
                <View style={{width: '82%'}}>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', paddingLeft: 5}}>TEAM WORKING</Text>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: '#7f8082', paddingLeft: 5}}>EXP +1400</Text>
                </View>
              </View>
            </View>
            <View style={{width: width / 2.2, height: width / 6.5, marginLeft: 10}}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '18%'}}>
                  <SimpleLineIcons name="organization" size={22} color="#3951b4" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
                </View>
                <View style={{width: '82%'}}>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', paddingLeft: 5}}>DISCIPLINE</Text>
                  <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: '#7f8082', paddingLeft: 5}}>EXP +1200</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '50%'}}>
              <Text style={{fontFamily: 'PlayfairDisplay-Bold', color: '#444', marginTop: 10}}>LAST UPDATED</Text>
            </View>
            <View style={{width: '50%', alignItems: 'flex-end', paddingTop: 8}}>
              <TouchableOpacity>
                <Ionicons name="ios-arrow-round-forward" size={24} color="#c2bdbc"/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


export default AccountScreen;
