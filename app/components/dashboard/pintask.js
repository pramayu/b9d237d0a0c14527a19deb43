import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const PinTask = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-thermometer" size={20} color="#3d72de" />
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', marginTop: 3, marginLeft: 5}}>REMIND ME</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{width: width / 3.5, height: width / 4, backgroundColor: '#f5f5f5', borderRadius: 4, padding: 8, borderWidth: 1, borderColor: '#f1f1f1', marginRight: 20}}>
                    <View style={{width: '100%', height: '75%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '70%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#a1a1a1', lineHeight: 12}}>QUIZ</Text>
                            </View>
                            <View style={{width: '30%', alignItems: 'flex-end'}}>
                                <TouchableOpacity>
                                    <Ionicons name="ios-arrow-round-forward" size={20} color="#a1a1a1" style={{lineHeight: 14}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                       <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#444', lineHeight: 18, marginTop: 5}}>Algoritma Pemrograman.</Text>
                    </View>
                    <View style={{width: '100%', height: '25%', justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-Regular', color: '#a1a1a1' }}>5 DAYS MORE</Text>
                    </View>
                </View>
                <View style={{width: width / 3.5, height: width / 4, backgroundColor: '#3d72de', borderRadius: 4, padding: 8, marginRight: 20, elevation: 20}}>
                    <View style={{width: '100%', height: '75%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '70%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', lineHeight: 12}}>SEMINAR</Text>
                            </View>
                            <View style={{width: '30%', alignItems: 'flex-end'}}>
                                <TouchableOpacity>
                                    <Ionicons name="ios-done-all" size={20} color="#ffcf6d" style={{lineHeight: 14}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                       <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#ffffff', lineHeight: 18, marginTop: 5}}>Entrepreneur Sejati.</Text>
                    </View>
                    <View style={{width: '100%', height: '25%', justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-Regular', color: '#ffcf6d' }}>TODAY</Text>
                    </View>
                </View>
                <View style={{width: width / 3.5, height: width / 4, backgroundColor: '#f5f5f5', borderRadius: 4, padding: 8, borderWidth: 1, borderColor: '#f2f2f2', marginRight: 20}}>
                    <View style={{width: '100%', height: '75%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '70%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#a1a1a1', lineHeight: 12}}>EXAM</Text>
                            </View>
                            <View style={{width: '30%', alignItems: 'flex-end'}}>
                                <TouchableOpacity>
                                    <Ionicons name="ios-arrow-round-forward" size={20} color="#a1a1a1" style={{lineHeight: 14}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                       <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#444', lineHeight: 18, marginTop: 5}}>Hitung Alajabar Linear.</Text>
                    </View>
                    <View style={{width: '100%', height: '25%', justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 10, fontFamily: 'SourceSansPro-Regular', color: '#a1a1a1' }}>5 DAYS MORE</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PinTask;