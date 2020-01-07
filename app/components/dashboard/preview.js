import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const Preview = (props) => {
    return (
        <View style={{width: '100%', height: '100%', backgroundColor: '#3d72de', borderRadius: 6, elevation: 20, padding: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-list-box" size={14} color="#ffcf6d"/>
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginLeft: 5}}>OVERVIEW</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
                <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                        <Ionicons name="ios-bulb" size={24} color="#ffcf6d"/>
                    </View>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>CREATIVE</Text>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 3}}>EXP +7200</Text>
                </View>
                <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                        <Ionicons name="ios-microphone" size={24} color="#ffcf6d" />
                    </View>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>SPEAKING</Text>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 3}}>EXP +5200</Text>
                </View>
                <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                        <Ionicons name="ios-navigate" size={24} color="#ffcf6d" />
                    </View>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>TEAM WORK</Text>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 3}}>EXP +5200</Text>
                </View>
                <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                        <Ionicons name="ios-clock" size={24} color="#ffcf6d" />
                    </View>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>DISCIPLINE</Text>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 3}}>EXP +4900</Text>
                </View>
            </View>
        </View>
    )
}

export default Preview;