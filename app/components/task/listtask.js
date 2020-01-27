import React from 'react';
import {
    View, Text, Dimensions,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ListTask = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#8eaae9', '#5d82f3']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10,
                    backgroundColor: 'rgba(255,255,255,.0)', padding: 15}}>
                    <Ionicons name="ios-water" size={20} color="#cbdbff" />
                    <View style={{marginTop: 35}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cbdbff'}}>CHECMISTRY</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Bold & Strong Logo for Bea..</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff'}}>Thu, Nov 25</Text>
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
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc'}}>Sat, Nov 29</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 5}}>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#c53421', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#df4532'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc', marginTop: 4, marginLeft: 5}}>2 DAYS MORE</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#31bef4', '#0e89ef']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 15}}>
                    <Ionicons name="ios-snow" size={20} color="#c8f0ff" />
                    <View style={{marginTop: 35}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#c8f0ff'}}>EKONOMI</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Abilene Christian University.</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#c8f0ff'}}>Sat, Oct 19</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 5}}>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#0e89ef', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '45%', height: 3, borderRadius: 2, backgroundColor: '#31bef4'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#c8f0ff', marginTop: 4, marginLeft: 5}}>5 DAYS MORE</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#85cb8b', '#4a9f79']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: 10, backgroundColor: 'rgba(255,255,255,.0)', padding: 15}}>
                    <Ionicons name="ios-leaf" size={20} color="#d3ffd7" />
                    <View style={{marginTop: 35}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#d3ffd7'}}>HISTORY</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Finance App Ad Design.</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#d3ffd7'}}>Sat, Oct 19</Text>
                    </View>
                    <View style={{width: '100%', marginTop: 5}}>
                        <View style={{width: '100%', height: 6, borderRadius: 4, backgroundColor: '#4a9f79', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '100%', height: 3, borderRadius: 2, backgroundColor: '#85cb8b'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#d3ffd7', marginTop: 4, marginLeft: 5}}>COMPLETED</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

export default ListTask;