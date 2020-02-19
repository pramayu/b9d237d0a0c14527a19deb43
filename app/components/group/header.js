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
                        <SimpleLineIcons name="grid" size={18} color="#3d72de" />
                    </View>
                    <View style={{width: '88%'}}>
                        <Text style={{color: '#323a5a', fontSize: 12, paddingTop: 2, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>STUDENT GROUP</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '40%', paddingTop: 8, alignItems: 'flex-end'}}>
                {/* <TouchableOpacity style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <SimpleLineIcons name="magnifier" size={18} color="#3d72de" />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Header;