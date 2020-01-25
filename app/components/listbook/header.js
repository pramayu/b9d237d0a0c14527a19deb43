import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    return (
        <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
            <View style={{width: '15%', paddingLeft: 15}}>
                <Ionicons name="ios-apps" size={24} color="#3d72de" />
            </View>
            <View style={{width: '85%'}}>
                <Text style={{color: '#323a5a', fontSize: 12, letterSpacing: .5, paddingTop: 2, paddingLeft: 38, fontFamily: 'Brandon_Medium'}}>BROWSE CHEMISTRY</Text>
            </View>
        </View>
    )
}

export default Header;