import React, { Component } from 'react';
import {
    View, Text, StatusBar,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/discuss/header';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class Discuss extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 1.08}}>
                    <View style={{position: 'absolute', width: 45,height: 45, bottom: 20, right: 0, zIndex: 999}}>
                        <TouchableOpacity style={{width: '100%', height: '100%', backgroundColor: '#3d72de', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 8, borderWidth: .8, borderColor: '#ffffff'}}>
                            <Ionicons name="ios-flame" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Discuss;