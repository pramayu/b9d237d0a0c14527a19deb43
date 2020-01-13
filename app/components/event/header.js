import React from 'react';
import {
    View, Text, Animated,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '90%'}}>
                <Animated.View style={{flexDirection: 'row', paddingTop: 13}}>
                    <SimpleLineIcons name="trophy" size={18} color="#444444" />
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EVENT</Text>
                </Animated.View>
            </View>
            <View style={{width: '10%', paddingTop: 12, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <SimpleLineIcons name="calendar" size={18} color="#444444"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;