import React from 'react';
import {
    View, Text, Dimensions,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const FeedSubject = (props) => {
    return (
        <View style={{width: '100%', height: '100%', paddingTop: 10}}>
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
            <View style={{width: '100%', flexDirection: 'row', marginTop: 20}}>
                <View style={{width: '40%', height: width / 2.2,borderRadius: 6, marginRight: 20}}>
                    <LinearGradient colors={['#6754b9','#3d2c88']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 20, padding: 15}}>
                        <Text style={{color: '#dcd4ff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12}}>MATH</Text>
                        <View style={{marginTop: 20}}>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 32, color: '#ffffff'}}>A+</Text>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#dcd4ff'}}>EXP +25000</Text>
                        </View>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#3d2c88', marginTop: 10, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '100%', height: 3, borderRadius: 2, backgroundColor: '#6754b9'}}></View>
                        </View>
                        <Text style={{color: '#6754b9', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, marginTop: 3}}>COMPLETED</Text>
                    </LinearGradient>
                </View>
                <View style={{width: '40%', height: width / 2.2,borderRadius: 6, marginRight: 20}}>
                    <LinearGradient colors={['#9fb2ac','#505e5e']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 20, padding: 15}}>
                        <Text style={{color: '#e5fdf5', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12}}>BIOLOGI</Text>
                        <View style={{marginTop: 20}}>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 32, color: '#ffffff'}}>B</Text>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#e5fdf5'}}>EXP +15000</Text>
                        </View>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#505e5e', marginTop: 10, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '70%', height: 3, borderRadius: 2, backgroundColor: '#9fb2ac'}}></View>
                        </View>
                        <Text style={{color: '#9fb2ac', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, marginTop: 3}}>COMPLETED</Text>
                    </LinearGradient>
                </View>
                <View style={{width: '40%', height: width / 2.2,borderRadius: 6, marginRight: 20}}>
                    <LinearGradient colors={['#f0a168','#c26c55']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 20, padding: 15}}>
                        <Text style={{color: '#ffebdc', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12}}>B.INDONESIA</Text>
                        <View style={{marginTop: 20}}>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 32, color: '#ffffff'}}>B+</Text>
                            <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#ffebdc'}}>EXP +19000</Text>
                        </View>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#c26c55', marginTop: 10, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '85%', height: 3, borderRadius: 2, backgroundColor: '#f0a168'}}></View>
                        </View>
                        <Text style={{color: '#f0a168', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, marginTop: 3}}>COMPLETED</Text>
                    </LinearGradient>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 20}}>
                <View style={{width: '8%'}}>
                    <SimpleLineIcons name="layers" size={20} color="#3d72de" />
                </View>
                <View style={{width: '92%'}}>
                    <Text style={{color: '#444', fontSize: 12, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}}>TOP 3 AVERAGE SCORE</Text>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'column', marginTop: 15}}>
                <View style={{width: '100%', height: 50, flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: '17%', height: '100%'}}>
                        <View style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'rgba(255, 255, 255, .0)', elevation: 8}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/7906549/untitled_artwork_57.jpg'}}/>
                        </View>
                    </View>
                    <View style={{width: '50%', height: '100%'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Ofuda Halloween</Text>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444'}}>EXP +28500</Text>
                        <View style={{width: '100%', flexDirection: 'row', height: 5, backgroundColor: '#fff', borderRadius: 4, marginTop: 3}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#3d72de', '#67d1e0']} style={{width: '95%', height: '100%', backgroundColor: '#3d72de', borderRadius: 4, elevation: 2}}></LinearGradient>
                        </View>
                    </View>
                    <View style={{width: '33%', height: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 24, color: '#cecece', fontStyle: 'italic'}}>01</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 50, flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: '17%', height: '100%'}}>
                        <View style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'rgba(255, 255, 255, .0)', elevation: 8}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://cdn.dribbble.com/users/2354196/screenshots/9161123/jeffthebarbersticker-01.png'}}/>
                        </View>
                    </View>
                    <View style={{width: '50%', height: '100%'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Lotus Riso</Text>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444'}}>EXP +28500</Text>
                        <View style={{width: '100%', flexDirection: 'row', height: 5, backgroundColor: '#fff', borderRadius: 4, marginTop: 3}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#3d72de', '#67d1e0']} style={{width: '85%', height: '100%', backgroundColor: '#3d72de', borderRadius: 4, elevation: 2}}></LinearGradient>
                        </View>
                    </View>
                    <View style={{width: '33%', height: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 24, color: '#cecece', fontStyle: 'italic'}}>02</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 50, flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: '17%', height: '100%'}}>
                        <View style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'rgba(255, 255, 255, .0)', elevation: 8}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://cdn.dribbble.com/users/4530174/screenshots/9078826/kakashi_dribbble_2x.jpg'}}/>
                        </View>
                    </View>
                    <View style={{width: '50%', height: '100%'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Scott Summertime</Text>
                        <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444'}}>EXP +27800</Text>
                        <View style={{width: '100%', flexDirection: 'row', height: 5, backgroundColor: '#fff', borderRadius: 4, marginTop: 3}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#3d72de', '#67d1e0']} style={{width: '80%', height: '100%', backgroundColor: '#3d72de', borderRadius: 4, elevation: 2}}></LinearGradient>
                        </View>
                    </View>
                    <View style={{width: '33%', height: '100%', alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 24, color: '#cecece', fontStyle: 'italic'}}>03</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FeedSubject;