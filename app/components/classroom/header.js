import React from 'react';
import {
    View, Text
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '90%'}}>
                <View style={{flexDirection: 'row', paddingTop: 13}}>
                    <SimpleLineIcons name="bubbles" size={18} color="#444" />
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>CLASSROOM</Text>
                </View>
            </View>
            <View style={{width: '10%', paddingTop: 12, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <SimpleLineIcons name="bell" size={16} color="#444" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;