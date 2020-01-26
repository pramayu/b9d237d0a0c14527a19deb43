import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const {width, height} = Dimensions.get('window');

const FeedEvent = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#8eaae9', '#5d82f3']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: props.elevation, backgroundColor: 'rgba(255,255,255,.0)', padding: 15, borderWidth: .5, borderColor: '#fff'}}>
                    <SimpleLineIcons name="badge" size={20} color="#cbdbff" />
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cbdbff'}}>CONTEST</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Bold & Strong Logo for Bea..</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#cbdbff'}}>Thu, Nov 25</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
                        <View style={{width: 25, height: 25, borderRadius: 50, backgroundColor: '#fff', elevation: props.elevation, alignSelf: 'flex-start'}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: .5, borderColor: '#ffffff'}}
                            source={{uri: 'https://images-workbench.99static.com/YnojFMZsDdD83utokHnIHky9oWM=/259x2137:831x2709/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/91/91036/attachment_91036040'}}/>
                        </View>
                        <Text style={{fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', alignSelf: 'flex-start', marginTop: 4, marginLeft: 5}}>jtmccamy</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#df4532', '#c53421']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: props.elevation, backgroundColor: 'rgba(255,255,255,.0)', padding: 15, borderWidth: .5, borderColor: '#fff'}}>
                    <SimpleLineIcons name="microphone" size={20} color="#ffc3bc" />
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#ffc3bc'}}>SEMINAR</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>DevOps for Pythonistas.</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffc3bc'}}>Sat, Nov 29</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
                        <View style={{width: 25, height: 25, borderRadius: 50, backgroundColor: '#fff', elevation: props.elevation, alignSelf: 'flex-start'}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: .5, borderColor: '#ffffff'}}
                            source={{uri: 'https://images-workbench.99static.com/WlvOGi6FJ_DVf9bP5HU5tjYBw0k=/113x12:613x512/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/70/7076/707626/c3df9614-9333-4c0c-afa2-c405a5c2a0f0.png'}}/>
                        </View>
                        <Text style={{fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', alignSelf: 'flex-start', marginTop: 4, marginLeft: 5}}>ludibes</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{width: '46%', height: width / 1.8, marginBottom: 20}}>
                <LinearGradient colors={['#31bef4', '#0e89ef']} style={{width: '100%', height: '100%', borderRadius: 6, elevation: props.elevation, backgroundColor: 'rgba(255,255,255,.0)', padding: 15, borderWidth: .5, borderColor: '#fff'}}>
                    <SimpleLineIcons name="graduation" size={20} color="#c8f0ff" />
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#c8f0ff'}}>SCHOLARSHIP</Text>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Abilene Christian University.</Text>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#c8f0ff'}}>Sat, Oct 19</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
                        <View style={{width: 25, height: 25, borderRadius: 50, backgroundColor: '#fff', elevation: props.elevation, alignSelf: 'flex-start'}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: .5, borderColor: '#ffffff'}}
                            source={{uri: 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2019%2F01%2F31%2F22%2F13%2F28%2F7cf205f2-815d-448e-93e0-808ee378aff9%2Fbo_rad.png?auto=format&ch=Width%2CDPR&w=250&h=250'}}/>
                        </View>
                        <Text style={{fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', alignSelf: 'flex-start', marginTop: 4, marginLeft: 5}}>smartdesign</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

export default FeedEvent;