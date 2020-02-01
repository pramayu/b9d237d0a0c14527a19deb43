import React from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const FeedSubject = (props) => {
    return (
        <View style={{width: '100%', height: '100%', paddingTop: 20}}>
            <View style={{width: '100%', height: width / 2.8, backgroundColor: '#3d72de', borderRadius: 10, elevation: 15, padding: 10}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Ionicons name="ios-pulse" size={18} color="#eef3ff" />
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#eef3ff', alignSelf: 'flex-start', paddingHorizontal: 8}}>AVERAGE SCORE & PRESENCE</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={{width: '70%', alignItems: 'center'}}>
                        <View style={{width: '100%', flexDirection: 'row', paddingTop: 5}}>
                            <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                                    <Ionicons name="ios-walk" size={24} color="#ffcf6d"/>
                                </View>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>ABSENCE</Text>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff'}}>05/05</Text>
                            </View>
                            <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                                    <Ionicons name="ios-thermometer" size={24} color="#ffcf6d"/>
                                </View>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>SICK</Text>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff'}}>02/MAX</Text>
                            </View>
                            <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#265abf', borderRadius: 4}}>
                                    <Ionicons name="ios-mail" size={24} color="#ffcf6d"/>
                                </View>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', marginTop: 5}}>PERMIT</Text>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff'}}>03/05</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: '30%', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 32, color: '#ffcf6d'}}>A+</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 16, color: '#ffffff'}}>EXP +25000</Text>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#265abf', marginTop: 3, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '75%', height: 3, borderRadius: 2, backgroundColor: '#ffcf6d'}}></View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FeedSubject;