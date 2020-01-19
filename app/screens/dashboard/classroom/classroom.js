import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../styles/sty';
import Header from '../../../components/classroom/header';
import HeadText from '../../../components/classroom/headtext';
import Stuff from '../../../components/classroom/stuff';
import History from '../../../components/classroom/history';

const {width, height} = Dimensions.get('window');

class ClassRoom extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 10}}>
                    <HeadText />
                </View>
                <View style={{width: '100%', height: height / 2.6, marginTop: 20}}>
                    <Stuff />
                </View>
                <View style={{width: '100%', height: height / 2.8, marginTop: 20}}>
                    <History />
                </View>
            </View>
        )
    }
}

export default ClassRoom;