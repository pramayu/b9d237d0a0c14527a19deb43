import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
                <View style={{flexDirection: 'row', paddingTop: 13}}>
                    <Ionicons name="ios-flash" size={22} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 2, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
                </View>
            </View>
            <View style={{width: '40%'}}>
                <View style={{width: '100%',flexDirection: 'row',justifyContent: 'flex-end'}}>
                    <View style={{width: 30, height: 30, alignItems: 'flex-end', paddingTop: 10}}>
                        <TouchableOpacity>
                            <Ionicons name="ios-notifications-outline" size={22} color="#444"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 24, height: 24, marginLeft: 20, marginTop: 9}}>
                        <TouchableOpacity style={{width: '100%', height: '100%'}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50}}
                                source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/8193761/media/8ce7134b03ff740188bdfd1660e994cc.jpg'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header;