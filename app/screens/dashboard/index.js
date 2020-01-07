import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity,
    Dimensions, StatusBar
} from 'react-native';
import { style }  from '../../styles/sty';
import Header from '../../components/dashboard/header';
import HeadText from '../../components/dashboard/headtext';
import Preview from '../../components/dashboard/preview';
import PinTask from '../../components/dashboard/pintask';
import MainMenu from '../../components/dashboard/mainmenu';
import Quest from '../../components/dashboard/quest';

const {width, height} = Dimensions.get('window');

class Dashboard extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%',height: height / 12}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 8}}>
                    <HeadText />
                </View>
                <View style={{width: '100%', height: height / 5.2, marginBottom: 20}}>
                    <Preview />
                </View>
                <View style={{width: '100%', height: height / 8, marginBottom: 15}}>
                    <MainMenu />
                </View>
                <View style={{width: '100%', height: height / 6}}>
                    <PinTask />
                </View>
                <View style={{width: '100%'}}>
                    <Quest />
                </View>
            </View>
        )
    }
}

export default Dashboard;