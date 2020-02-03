import React from 'react';
import {
    View, Text, Dimensions,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ListQuiz = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#8eaae9', '#5d82f3']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10,
                    backgroundColor: 'rgba(255,255,255,.0)', padding: 15}}>
                    <Ionicons name="ios-water" size={20} color="#cbdbff" />
                    <View style={{marginTop: 35}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cbdbff'}}>CHECMISTRY</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Bold & Strong Logo for Bea..</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff'}}>30 minutes</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 5}}>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#5d82f3', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#8eaae9'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff', marginTop: 4, marginLeft: 5}}>10 DAYS MORE</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#df4532', '#c53421']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 15}}>
                    <Ionicons name="ios-flame" size={20} color="#ffc3bc" />
                    <View style={{marginTop: 35}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#ffc3bc'}}>ENGLISH</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>DevOps for Pythonistas.</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc'}}>45 minutes</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 5}}>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#c53421', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#df4532'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc', marginTop: 4, marginLeft: 5}}>2 DAYS MORE</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

export default ListQuiz;