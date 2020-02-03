import React from 'react';
import {
    View, Text, TouchableOpacity,
    Animated
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
                <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
                    <View style={{width: '12%'}}>
                        <SimpleLineIcons name="badge" size={18} color="#3d72de" />
                    </View>
                    <View style={{width: '88%'}}>
                        <Text style={{color: '#323a5a', fontSize: 12, paddingTop: 2, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>STUDENT QUIZ</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '40%', paddingTop: 8, alignItems: 'flex-end'}}>
                <View style={{width: '30%', height: 22, backgroundColor: props.onoff === false ? '#f5f5f5' : '#3d72de', borderRadius: 50, borderWidth: 1,
                    borderColor: props.onoff === false ? '#f1f1f1' : '#3665c5', paddingHorizontal: 2,justifyContent: 'center', alignItems: 'flex-start'}}>
                    <TouchableOpacity onPress={(e) => props.setSwitchAccess()} style={{width: 18, height: 18, borderRadius: 50, backgroundColor: '#ffffff',
                        borderColor: props.onoff === false ? '#f1f1f1' : '#3665c5', borderWidth: 1, transform: [{translateX: props.onoff === false ? props.switchOn : props.switchOff}]}}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header;