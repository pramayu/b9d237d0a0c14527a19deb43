import React from 'react';
import {
    View, Text, Dimensions, Image, TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const RecomendAudio = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{marginBottom: 20}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#323a5a', fontSize: 13, paddingVertical: 4}}>RECOMMENDED</Text>
               <View style={{width: 15, height: 2, backgroundColor: "#3d72de", borderRadius: 2}}></View>
            </View>
            <View style={{flexDirection: 'column', width: '100%'}}>
                <View style={{width: '100%', height: width / 5.7, flexDirection: 'row', marginBottom: 10}}>
                    <View style={{width: width / 6.5, height: width / 6.5, backgroundColor: '#ededed', elevation: 8, borderWidth: 2, borderColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, position: 'absolute', borderRadius: 20, backgroundColor: '#fff', zIndex: 999}}></View>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://cdn.dribbble.com/users/43342/screenshots/6270804/procreate_vinylcover_dribbble_2x.jpg'}}/>
                    </View>
                    <View style={{width: '62%', height: '100%', paddingLeft: 15, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>The Violet and the Tom</Text>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999'}}>Eve Ocotillo - 01:02:58</Text>
                    </View>
                    <View style={{width: '18%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
                            <Ionicons name="ios-bookmark" size={16} color="#999" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: '100%', height: width / 5.7, flexDirection: 'row', marginBottom: 10}}>
                    <View style={{width: width / 6.5, height: width / 6.5, backgroundColor: '#ededed', elevation: 8, borderWidth: 2, borderColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, position: 'absolute', borderRadius: 20, backgroundColor: '#fff', zIndex: 999}}></View>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/e35/71784535_157473108844311_3763393540683523523_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=2tCklYtxBboAX-hZ72R&oh=80ad9bff6b7a19207c14bd6a687d89c6&oe=5EC34738'}}/>
                    </View>
                    <View style={{width: '62%', height: '100%', paddingLeft: 15, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>西野カナ『Best Friend』</Text>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999'}}>Lefty Hand Cream - 42:18</Text>
                    </View>
                    <View style={{width: '18%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
                            <Ionicons name="ios-bookmark" size={16} color="#999" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: '100%', height: width / 5.7, flexDirection: 'row', marginBottom: 10}}>
                    <View style={{width: width / 6.5, height: width / 6.5, backgroundColor: '#ededed', elevation: 8, borderWidth: 2, borderColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: 10, height: 10, position: 'absolute', borderRadius: 20, backgroundColor: '#fff', zIndex: 999}}></View>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                            source={{uri: 'https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/84319238_187652005670158_8429772956853527891_n.jpg?_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6cKYbbC05NoAX-rtyHO&oh=400685f91fcf257af772e1fd568fcc53&oe=5ECAAF69'}}/>
                    </View>
                    <View style={{width: '62%', height: '100%', paddingLeft: 15, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Fine Today</Text>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999'}}>Ardhito Pramono - 30:35</Text>
                    </View>
                    <View style={{width: '18%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
                            <Ionicons name="ios-bookmark" size={16} color="#999" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RecomendAudio;