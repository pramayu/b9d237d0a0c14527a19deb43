import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Quest = (props) => {
    return (
        <View style={{marginTop: 30}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-pulse" size={20} color="#3d72de" />
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', marginTop: 3, marginLeft: 5}}>QUEST</Text>
            </View>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                <View style={{width: '48%', height: height / 7.2, backgroundColor: '#323a5a', borderRadius: 4, marginRight: 15, paddingHorizontal: 8, paddingVertical: 5, elevation: 10}}>
                    <View style={{width: '100%', height: 22, flexDirection: 'row'}}>
                        <View style={{width: '80%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#cde3e8'}}>#photoshop</Text>
                        </View>
                        <View style={{width: '20%', alignItems: 'flex-end'}}>
                            <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'flex-end'}}>
                                <Ionicons name="ios-backspace" size={14} color="#7ac8bd" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: 45}}>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color:"#cde3e8", lineHeight: 19}}>From Photoshop actions to Photoshop scripting?</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-heart" size={14} color="#ea4c89"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, marginRight: 10, lineHeight: 16}}>76</Text>
                        <Ionicons name="ios-chatbubbles" size={14} color="#637dfc"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, marginRight: 10, lineHeight: 16}}>106</Text>
                        <Ionicons name="ios-flask" size={14} color="#7ac8bd"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, lineHeight: 16}}>+150</Text>
                    </View>
                </View>
                <View style={{width: '48%', height: height / 7.2, backgroundColor: '#323a5a', borderRadius: 4, marginRight: 15, paddingHorizontal: 8, paddingVertical: 5, elevation: 10}}>
                    <View style={{width: '100%', height: 22, flexDirection: 'row'}}>
                        <View style={{width: '80%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#cde3e8'}}>#physics</Text>
                        </View>
                        <View style={{width: '20%', alignItems: 'flex-end'}}>
                            <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'flex-end'}}>
                                <Ionicons name="ios-backspace" size={14} color="#7ac8bd" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: 45}}>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color:"#cde3e8", lineHeight: 19}}>A bus of 2000 kg in mass moves at a velocity..</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-heart" size={14} color="#ea4c89"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, marginRight: 10, lineHeight: 16}}>15</Text>
                        <Ionicons name="ios-chatbubbles" size={14} color="#637dfc"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, marginRight: 10, lineHeight: 16}}>78</Text>
                        <Ionicons name="ios-flask" size={14} color="#7ac8bd"/>
                        <Text style={{fontFamily:'SourceSansPro-SemiBold', fontSize: 14, color: '#6476a0', marginLeft: 5, lineHeight: 16}}>+158</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Quest;