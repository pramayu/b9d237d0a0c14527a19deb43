import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '80%'}}>
                <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
                    <View style={{width: '10%'}}>
                        <SimpleLineIcons name="graduation" size={20} color="#444" />
                    </View>
                    <View style={{width: '90%'}}>
                        <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>KELAS XII-A</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '10%', paddingTop: 12, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <SimpleLineIcons name="bell" size={16} color="#444" />
                </TouchableOpacity>
            </View>
            <View style={{width: '10%', height: 24, paddingTop: 12, alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={(e) => props.setShowModal()}>
                    <SimpleLineIcons name="grid" size={15} color="#444" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;