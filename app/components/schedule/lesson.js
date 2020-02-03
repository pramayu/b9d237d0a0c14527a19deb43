import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const Lesson = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 25}}>
                <View style={{width: '15%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgba(106,189,133, .3)', borderRadius: 100, justifyContent: 'center', alignItems:'center'}}>
                        <View style={{width: 8, height: 8, backgroundColor: '#6abd85', borderRadius: 100, borderWidth: .5, borderColor:  '#fff'}}></View>
                    </View>
                </View>
                <View style={{width: '85%'}}>
                    <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#6abd85'}}>08:00 - 09:45</Text>
                    <View style={{marginTop: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#6abd85', borderRadius: 4, marginRight: 5}}>BIOLOGI</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#6abd85', borderRadius: 4, marginRight: 5}}>SECTION-4</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#6abd85', borderRadius: 4, marginRight: 5}}>PAGE-25</Text>
                    </View>
                    <View style={{paddingRight: '20%'}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#444444', marginTop: 10, lineHeight: 20}}>METABOLISM INCLUDES CATABOLISM AND ANABOLISM</Text>
                    </View>
                    <View style={{width: 35, height: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1, borderColor: '#f1f1f1', marginTop: 10}}>
                        <Ionicons name="ios-more" size={20} color="#7f8082"/>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 25}}>
                <View style={{width: '15%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgba(101,93,176, .3)', borderRadius: 100, justifyContent: 'center', alignItems:'center'}}>
                        <View style={{width: 8, height: 8, backgroundColor: '#655db0', borderRadius: 100, borderWidth: .5, borderColor:  '#fff'}}></View>
                    </View>
                </View>
                <View style={{width: '85%'}}>
                    <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#655db0'}}>10:00 - 10:45</Text>
                    <View style={{marginTop: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#655db0', borderRadius: 4, marginRight: 5}}>B.INDONESIA</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#655db0', borderRadius: 4, marginRight: 5}}>SECTION-7</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#655db0', borderRadius: 4, marginRight: 5}}>PAGE-75</Text>
                    </View>
                    <View style={{paddingRight: '20%'}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#444444', marginTop: 10, lineHeight: 20}}>SUBMISSION OF IDEAS AND RESPONSES IN DISCUSSION</Text>
                    </View>
                    <View style={{width: 35, height: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1, borderColor: '#f1f1f1', marginTop: 10}}>
                        <Ionicons name="ios-more" size={20} color="#7f8082"/>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 25}}>
                <View style={{width: '15%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgba(235,189,78, .3)', borderRadius: 100, justifyContent: 'center', alignItems:'center'}}>
                        <View style={{width: 8, height: 8, backgroundColor: '#ebbd4e', borderRadius: 100, borderWidth: .5, borderColor:  '#fff'}}></View>
                    </View>
                </View>
                <View style={{width: '85%'}}>
                    <Text style={{fontFamily: 'Brandon_Bold', fontSize: 14, color: '#ebbd4e'}}>11:00 - 12:00</Text>
                    <View style={{marginTop: 5, flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#ebbd4e', borderRadius: 4, marginRight: 5}}>GEOGRAPHY</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#ebbd4e', borderRadius: 4, marginRight: 5}}>SECTION-5</Text>
                        <Text style={{fontFamily: 'Brandon_Bold', fontSize: 10, color: '#ffffff',
                            alignSelf: 'flex-start',paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#ebbd4e', borderRadius: 4, marginRight: 5}}>PAGE-50</Text>
                    </View>
                    <View style={{paddingRight: '20%'}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#444444', marginTop: 10, lineHeight: 20}}>INDONESIA POTENTIAL RESOURCES FOR TOWARDS FOOD SECURITY</Text>
                    </View>
                    <View style={{width: 35, height: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 20, borderWidth: 1, borderColor: '#f1f1f1', marginTop: 10}}>
                        <Ionicons name="ios-more" size={20} color="#7f8082"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Lesson;