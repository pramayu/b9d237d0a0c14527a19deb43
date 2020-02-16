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
                        <SimpleLineIcons name="eyeglass" size={18} color="#3d72de" />
                    </View>
                    <View style={{width: '90%'}}>
                        <Text style={{color: '#323a5a', fontSize: 12, letterSpacing: 1, paddingTop: 2, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>TEACHERS</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '25%', paddingTop: 12, alignItems: 'flex-end'}}>
                <TouchableOpacity style={{width: 24, height: 20, justifyContent: 'center', alignItems:'center'}}>
                    <SimpleLineIcons name="magnifier" size={16} color="#3d72de" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;