import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '75%'}}>
                <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
                    <View style={{width: '10%'}}>
                        <SimpleLineIcons name="clock" size={20} color="#444" />
                    </View>
                    <View style={{width: '90%'}}>
                        <Text style={{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>SCHEDULE</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '25%', paddingTop: 12, alignItems: 'flex-end'}}>
                <Text style={{color: '#444', fontSize: 12, fontFamily: 'Brandon_Medium', letterSpacing: 1}}>{props.currentMonth}, {props.currentYear}</Text>
            </View>
        </View>
    )
}

export default Header;