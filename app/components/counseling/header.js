import React from 'react';
import {
    View, Text, Animated,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const counselingScreen = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
                <Animated.View style={{flexDirection: 'row', paddingTop: 13}}>
                    <SimpleLineIcons name="bubble" size={20} color="#3d72de" />
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 8, fontFamily: 'Brandon_Medium'}]}>COUNSELING</Text>
                </Animated.View>
            </View>
            <View style={{width: '40%', paddingTop: 13, alignItems: 'flex-end'}}>
                <View style={{width: '30%', height: 22, backgroundColor: props.onoff === false ? '#f5f5f5' : '#3d72de', borderRadius: 50, borderWidth: 1,
                    borderColor: props.onoff === false ? '#f1f1f1' : '#3665c5', paddingHorizontal: 2,justifyContent: 'center', alignItems: 'flex-start'}}>
                    <TouchableOpacity onPress={(e) => props.setSwitchAccess()} style={{width: 18, height: 18, borderRadius: 50, backgroundColor: '#ffffff',
                        borderColor: props.onoff === false ? '#f1f1f1' : '#3665c5', borderWidth: 1, transform: [{translateX: props.onoff === false ? props.switchOn : props.switchOff}]}}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const userChatScreen = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '15%'}}>
                <TouchableOpacity style={{width: 40, height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Ionicons name="ios-arrow-round-back" size={28} color="#3d72de" />
                </TouchableOpacity>
            </View>
            <View style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Nilo Dalagan</Text>
            </View>
            <View style={{width: '15%', paddingTop: 13, alignItems: 'flex-end'}}>
                
            </View>
        </View>
    )
}

const Header = (props) => {
    if(props.screen === "counseling") {
        return counselingScreen(props)
    } else if(props.screen === "userchat") {
        return userChatScreen(props)
    }
}

export default Header;