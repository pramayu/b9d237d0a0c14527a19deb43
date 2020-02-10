import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/audiobook/header';
import MenuSubject from '../../../../components/audiobook/menusubject';
import SavedAudio from '../../../../components/audiobook/saved';
import RecomendAudio from '../../../../components/audiobook/recomended';

const {width, height} = Dimensions.get('window');

class Podcast extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 10}}>
                    <Text style={{fontFamily: 'Brandon_Regular', color: '#444', fontSize: 24}}>Browse</Text>
                    <MenuSubject />
                </View>
                <View style={{width: '100%', height: height / 3.2}}>
                    <SavedAudio />
                </View>
                <View style={{width: '100%', height: height / 2.5, marginTop: 30}}>
                    <RecomendAudio />
                </View>
            </View>
        )
    }
}

export default Podcast;