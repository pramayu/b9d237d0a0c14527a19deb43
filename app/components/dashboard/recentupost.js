import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image, Dimensions
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const RecentPost = (props) => {
    return (
        <>
            <View style={{width: width / 3, height: '100%', borderRadius: 6, backgroundColor: '#0E2058', paddingTop: 10, paddingHorizontal: 10, elevation: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '70%'}}>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#9bb3ff', marginTop: 5}}>QUIZ</Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Ionicons name="ios-bookmark" size={22} color="#9bb3ff"/>
                    </View>
                </View>
                <View style={{height: 45}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 10}}>CALCULUS</Text>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 5}}>4:50 PM</Text>
                </View>
                <TouchableOpacity style={{width: '100%', height: 18, borderRadius: 4, justifyContent: 'center', alignItems: 'flex-start', marginTop: 10}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 11, color: '#9bb3ff'}}>TAKE NOW</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: width / 3, height: '100%', borderRadius: 6, backgroundColor: '#402640', paddingTop: 10, paddingHorizontal: 10, elevation: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '70%'}}>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#a79eae', marginTop: 5}}>DISCUSSION</Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Ionicons name="ios-chatboxes" size={22} color="#a79eae"/>
                    </View>
                </View>
                <View style={{height: 45}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 10}}>CHEMISTRY</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 14, color: '#ffffff', marginTop: 5}}>Structure Atom</Text>
                </View>
                <TouchableOpacity style={{width: '100%', height: 18, borderRadius: 4, justifyContent: 'center', alignItems: 'flex-start', marginTop: 8}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 11, color: '#a79eae'}}>JOIN NOW</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: width / 3, height: '100%', borderRadius: 6, backgroundColor: '#DA6536', paddingTop: 10, paddingHorizontal: 10, elevation: 20, marginRight: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '70%'}}>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffab89', marginTop: 5}}>SCHEDULE</Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Ionicons name="ios-clock" size={22} color="#ffab89"/>
                    </View>
                </View>
                <View style={{height: 45}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', marginTop: 10}}>ENGLISH</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 14, color: '#ffffff', marginTop: 5}}>Schedule Updated</Text>
                </View>
                <TouchableOpacity style={{width: '100%', height: 18, borderRadius: 4, justifyContent: 'center', alignItems: 'flex-start', marginTop: 8}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 11, color: '#ffab89'}}>CHECK IT</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default RecentPost;