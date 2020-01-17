import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../styles/sty';
import Header from '../../../components/classroom/header';
import MainMenu from '../../../components/classroom/mainmenu';

const {width, height} = Dimensions.get('window');

class ClassRoom extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 3, marginTop: 20}}>
                    <MainMenu />
                </View>
            </View>
        )
    }
}

export default ClassRoom;