import React, { Component } from "react";
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/report/header';
import HeadText from '../../../../components/report/headtext';
import FeedSubject from '../../../../components/report/feedsubject';

const {width, height} = Dimensions.get('window');

class Report extends Component {
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
                <View style={{width: '100%', height: height / 1.2}}>
                    <FeedSubject />
                </View>
            </View>
        )
    }
}

export default Report;