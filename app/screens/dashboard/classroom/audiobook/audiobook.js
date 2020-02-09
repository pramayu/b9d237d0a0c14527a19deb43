import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/audiobook/header';
import MenuSubject from '../../../../components/audiobook/menusubject';

const {width, height} = Dimensions.get('window');

class Podcast extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 12}}>
                    <MenuSubject />
                </View>
            </View>
        )
    }
}

export default Podcast;