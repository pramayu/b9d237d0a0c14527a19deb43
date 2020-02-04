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
                    <SimpleLineIcons name="bubbles" size={19} color="#3d72de" />
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 8, fontFamily: 'Brandon_Medium'}]}>DISCUSS</Text>
                </Animated.View>
            </View>
            <View style={{width: '10%', paddingTop: 10, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <SimpleLineIcons name="folder" size={18} color="#3d72de"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;