import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const PinTask = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-thermometer" size={20} color="#3d72de" />
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', marginTop: 3, marginLeft: 5}}>REMIND ME</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{width: '38%', height: width / 2.5, marginRight: 20}}>
                    <LinearGradient colors={['#8eaae9', '#5d82f3']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 10}}>
                        <Ionicons name="ios-water" size={18} color="#cbdbff" />
                        <View style={{marginTop: 15}}>
                            <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-SemiBold', color: '#cbdbff'}}>SEMINAR</Text>
                            <Text style={{fontSize: 14, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Bold & Strong Logo for Bea..</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff'}}>Thu, Nov 25</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 5}}>
                            <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#5d82f3', justifyContent: 'center', paddingHorizontal: 2}}>
                                <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#8eaae9'}}></View>
                            </View>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff', marginTop: 2, marginLeft: 5}}>10 DAYS MORE</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={{width: '38%', height: width / 2.5, marginRight: 20}}>
                    <LinearGradient colors={['#df4532', '#c53421']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 10}}>
                        <Ionicons name="ios-flame" size={18} color="#ffc3bc" />
                        <View style={{marginTop: 15}}>
                            <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-SemiBold', color: '#ffc3bc'}}>ENGLISH</Text>
                            <Text style={{fontSize: 14, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>DevOps for Pythonistas.</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc'}}>Sat, Nov 29</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 5}}>
                            <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#c53421', justifyContent: 'center', paddingHorizontal: 2}}>
                                <View style={{width: '25%', height: 3, borderRadius: 2, backgroundColor: '#df4532'}}></View>
                            </View>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc', marginTop: 4, marginLeft: 5}}>2 DAYS MORE</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={{width: '38%', height: width / 2.5, marginRight: 20}}>
                    <LinearGradient colors={['#85cb8b', '#4a9f79']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 10}}>
                        <Ionicons name="ios-leaf" size={18} color="#d3ffd7" />
                        <View style={{marginTop: 15}}>
                            <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-SemiBold', color: '#d3ffd7'}}>HISTORY</Text>
                            <Text style={{fontSize: 14, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Finance App Ad Design.</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#d3ffd7'}}>Sat, Oct 19</Text>
                        </View>
                        <View style={{width: '100%', marginTop: 5}}>
                            <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#4a9f79', justifyContent: 'center', paddingHorizontal: 2}}>
                                <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#85cb8b'}}></View>
                            </View>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#d3ffd7', marginTop: 4, marginLeft: 5}}>15 DAYS</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default PinTask;