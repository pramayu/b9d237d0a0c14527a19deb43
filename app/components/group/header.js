import React from 'react';
import {
    View, Text, TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    if(props.screen === 'group') {
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
    } else if(props.screen === 'conversation') {
        return (
            <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                <View style={{width: '50%'}}>
                    <View style={{width: '100%', flexDirection: 'row', paddingTop: 10}}>
                        <View style={{width: '12%'}}>
                            <Ionicons name="ios-arrow-round-back" size={24} color="#3d72de" />
                        </View>
                        <View style={{width: '88%'}}>
                            <Text style={{color: '#323a5a', fontSize: 12, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>BASKET TEAM</Text>
                        </View>
                    </View>
                </View>
                <View style={{width: '50%', paddingTop: 12}}>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                        <View style={{width: 28, height: 28, backgroundColor: '#ededed', borderRadius: 50, marginLeft: -5, elevation: 5, borderWidth: 1, borderColor: '#ffffff'}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/1068771/screenshots/8827348/fashion_d.jpg'}} />
                        </View>
                        <View style={{width: 28, height: 28, backgroundColor: '#ededed', borderRadius: 50, marginLeft: -5, elevation: 5, borderWidth: 1, borderColor: '#ffffff'}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/6707701/tony.png'}} />
                        </View>
                        <TouchableOpacity style={{width: 28, height: 28, backgroundColor: '#323a5a', borderRadius: 50, justifyContent: 'center', alignItems: 'center',
                            marginLeft: -5, elevation: 5, borderWidth: 1, borderColor: '#ffffff'}}>
                            <SimpleLineIcons name="grid" size={12} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;