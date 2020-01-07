import React, {Component} from 'react';
import {
    View, Text, TextInput,
    Dimensions, StatusBar, TouchableOpacity
} from 'react-native';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from '../../styles/sty';
import { API_VERIFYUSER, API_CHECKTOKEN } from '../../api/api_users';

const {width, height} = Dimensions.get('window');

class VerifyUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            verifycode  : [],
            errors      : {},
            value1      : '',
            value2      : '',
            value3      : '',
            value4      : ''
        },
        this.setHandleStore = this.setHandleStore.bind(this)
    }

    setHandleField = (name, value, field) => {
        this.setState({
            [name]: value,
            verifycode: [...this.state.verifycode, value]
        });
        const nextfield = `value${value.length + field}`;
        if(field < 3){
            this.refs[nextfield].focus();
        }
    }

    setHandleStore = async() => {
        if(this.state.verifycode.length === 4){
            try{
                const vcode = `${this.state.value1}${this.state.value2}${this.state.value3}${this.state.value4}`;
                const rs = await this.props.verifyuser({
                    variables: {
                        verifycode: vcode
                    }
                })
                const { status, errorpath, infopath, refreshtoken } = rs.data.verifyuser;
                if(status === true){
                    await AsyncStorage.setItem('refreshtoken', refreshtoken);
                    this.setHandleToken(refreshtoken)
                }
                if(status === false){
                    const errors = {};
                    errors[`${errorpath}`] = infopath
                    this.setState({ errors })
                    this.setState({
                        value1      : '',
                        value2      : '',
                        value3      : '',
                        value4      : '',
                        errors
                    })
                }
            } catch(e) {
                console.log(e)
                this.setState({
                    value1      : '',
                    value2      : '',
                    value3      : '',
                    value4      : '',
                })
            }
        }
    };

    setHandleToken = async(refreshtoken) => {
        if(refreshtoken) {
            try {
                const rs = await this.props.checkaccesstoken({
                    variables: {
                        refreshtoken: refreshtoken
                    }
                });
                const {status, errorpath, infopath, accesstoken} = rs.data.checkaccesstoken;
                if(status === true) {
                    await AsyncStorage.setItem('accesstoken', accesstoken);
                    this.props.navigation.push('DiscoverSchool');
                } else {
                    const errors = {};
                    errors[`${errorpath}`] = infopath
                    this.setState({
                        value1      : '',
                        value2      : '',
                        value3      : '',
                        value4      : '',
                        errors
                    })
                };
            } catch(e) {
                this.setState({
                    value1      : '',
                    value2      : '',
                    value3      : '',
                    value4      : '',
                })
                this.props.navigation.navigate('SignInScreen');
            };
        } else {
            this.setState({
                value1      : '',
                value2      : '',
                value3      : '',
                value4      : '',
            })
            this.props.navigation.navigate('SignUpScreen');
        }
    };

    focusNextField = (nextfield) => {
        this.refs[nextfield].focus();
    };

    renderFieldInput = () => {
        let fields = [1, 2, 3, 4];
        return fields.map((field, index) => {
            return (
                <TextInput ref={`value${index}`} key={index} blurOnSubmit={false} returnKeyType={index === 3 ? "done": "next"} maxLength={1}
                onChangeText={(txt) => this.setHandleField(`value${field}`, txt, index)}
                style={{fontFamily: 'SourceSansPro-SemiBold', width: '20%', height: 40, borderRadius: 6, fontSize: 18,
                backgroundColor: '#ffffff', fontWeight: '300', paddingHorizontal: 15, textAlign: 'center', color: '#626165'}}/>
            )
        }, this.setHandleStore())
    };

    render() {
        return(
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
                <View style={{flexDirection: 'row', paddingTop: height / 10}}>
                    <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
                    <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 32, color: '#444', marginTop: 10}}>OTP Verification</Text>
                <View style={{paddingRight: '45%'}}>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>Be part of an Education community Without Limits.</Text>
                </View>
                <View style={{width: '100%', height: height / 2, paddingHorizontal: 10, elevation: 100, borderRadius: 6, paddingTop: height/10}}>
                    <View style={{width: '100%', height: '100%', backgroundColor: '#f7f7f7', borderRadius: 6, paddingVertical: 20}}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontFamily:'SourceSansPro-Regular', fontSize: 14, color:'#626165'}}>Enter the OTP you received to</Text>
                            <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color:'#626165', marginTop: 5}}>+628214488xxxx</Text>
                        </View>
                        <View style={{paddingHorizontal: 40, marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
                            { this.renderFieldInput() }
                        </View>
                        <View style={{paddingHorizontal: 40, marginTop: 30}}>
                            <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>RESEND OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default compose(
    graphql(API_VERIFYUSER, {name: 'verifyuser'}),
    graphql(API_CHECKTOKEN, {name: 'checkaccesstoken'})
)(VerifyUser);