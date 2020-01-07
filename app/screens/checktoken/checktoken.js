import React, { Component, useState, useEffect } from 'react';
import { View, Text, StatusBar, Animated } from 'react-native';
import compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_CHECKTOKEN } from '../../api/api_users';
import { style } from '../../styles/sty';


class CheckRefreshToken extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.setaccesstoken()
    }
   
    setaccesstoken = async() => {
        try {
            const refreshtoken = await AsyncStorage.getItem('refreshtoken');
            if (refreshtoken) {
                const rs = await this.props.checkaccesstoken({
                    variables: {
                        refreshtoken: refreshtoken
                    }
                });
                const { status, errorpath, infopath, accesstoken } = rs.data.checkaccesstoken;
                if (status === true) {
                    await AsyncStorage.setItem('accesstoken', accesstoken);
                    setTimeout(() => {
                        this.props.navigation.navigate('Dashboard')
                    }, 1500)
                } else {
                    setTimeout(() => {
                        this.props.navigation.navigate('IntroScreenPath')
                    }, 1500)
                }
            } else {
                setTimeout(() => {
                    this.props.navigation.navigate('IntroScreenPath')
                }, 1500)
            }
        } catch (e) {
            setTimeout(() => {
                this.props.navigation.navigate('IntroScreenPath')
            }, 1500)
        }
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
                <Animated.View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="ios-flash" size={52} color="#3951b4" style={{marginBottom: 5}}/>
                    <Text style={[style.logo_font, {color: '#444', fontSize: 24, letterSpacing: 4, marginBottom: 5}]}>EDNATION</Text>
                </Animated.View>
            </View>
        )
    }
}

export default compose(
    graphql(API_CHECKTOKEN, {name: 'checkaccesstoken'})
)(CheckRefreshToken);