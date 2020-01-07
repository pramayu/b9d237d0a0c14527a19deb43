import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity, Image,
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const FeedFocusIn = () => {
    return (
        <>
            <View style={{marginBottom: 40}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '18%', alignItems: 'center'}}>
                        <View style={{width: 40, height: 40, borderRadius: 100, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 100, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/6823598/untitled_artwork_47_1x.jpg'}} />
                        </View>
                    </View>
                    <View style={{width: '82%', paddingLeft: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '80%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444444'}}>Cleveroad</Text>
                            </View>
                            <View style={{width: '20%'}}>
                                <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', paddingHorizontal: 8, paddingVertical: 3, color: '#444444',
                                    backgroundColor: '#f7f7f7', alignSelf: 'flex-end', borderRadius: 4, borderWidth: 1, borderColor: '#f1f1f1'}}>Quest</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cccac9'}}>2 hours ago</Text>
                        <View style={{paddingRight: 10}}>
                            <Text style={{fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color: '#444444', marginTop: 10}}>Make loop with matrix slice more efficient.</Text>
                            <Text style={{fontSize: 16, fontFamily: 'Brandon_Regular', color: '#7f8082', lineHeight: 20, marginTop: 5, textAlign: 'justify'}}>I want to make the code below more efficient, but I'm not sure how. I want to use numpy and native python libraries only....</Text>
                        </View>
                        <View style={{width: '100%',flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-heart" size={18} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>25 likes</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-chatbubbles" size={19} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>12 replies</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-attach" size={18} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>2 files</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginBottom: 40}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '18%', alignItems: 'center'}}>
                        <View style={{width: 40, height: 40, borderRadius: 100, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 100, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/7212849/untitled_artwork_20_1x.jpg'}} />
                        </View>
                    </View>
                    <View style={{width: '82%', paddingLeft: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '80%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444444'}}>Shevchenko</Text>
                            </View>
                            <View style={{width: '20%'}}>
                                <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', paddingHorizontal: 8, paddingVertical: 3, color: '#444444',
                                    backgroundColor: '#f7f7f7', alignSelf: 'flex-end', borderRadius: 4, borderWidth: 1, borderColor: '#f1f1f1'}}>Event</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cccac9'}}>4 hours ago</Text>
                        <View style={{width: width / 1.5, height: width / 1.5, marginVertical: 10, borderRadius: 6, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%',resizeMode: 'cover', borderRadius: 6, borderWidth: .5, borderColor: '#ffffff'}}
                                source={{uri: 'https://cdn.dribbble.com/users/3496645/screenshots/9163717/blue_vahlmo_design_flyer_mock.jpg'}} />
                        </View>
                        <View style={{paddingRight: '10%'}}>
                            <Text style={{fontSize: 16, fontFamily: 'Brandon_Regular', color: '#7f8082', lineHeight: 20, marginTop: 5}}>From naming to strategy to logotype to illustration to photography...</Text>
                        </View>
                        <View style={{width: '100%',flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-heart" size={18} color="#ea4c89" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>128 likes</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-chatbubbles" size={19} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>54 replies</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-share-alt" size={19} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>54 shares</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginBottom: 40}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '18%', alignItems: 'center'}}>
                        <View style={{width: 40, height: 40, borderRadius: 100, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 100, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/7212849/untitled_artwork_20_1x.jpg'}} />
                        </View>
                    </View>
                    <View style={{width: '82%', paddingLeft: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '80%'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444444'}}>Matt Wojtaś</Text>
                            </View>
                            <View style={{width: '20%'}}>
                                <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', paddingHorizontal: 8, paddingVertical: 3, color: '#444444',
                                    backgroundColor: '#f7f7f7', alignSelf: 'flex-end', borderRadius: 4, borderWidth: 1, borderColor: '#f1f1f1'}}>Shots</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#cccac9'}}>4 hours ago</Text>
                        <View style={{width: width / 1.5, height: width / 1.5, marginVertical: 10, borderRadius: 6, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%',resizeMode: 'cover', borderRadius: 6, borderWidth: .5, borderColor: '#ffffff'}}
                                source={{uri: 'https://cdn.dribbble.com/users/1575908/screenshots/6771770/ig_2x.jpg'}} />
                        </View>
                        <View style={{paddingRight: '10%'}}>
                            <Text style={{fontSize: 16, fontFamily: 'Brandon_Regular', color: '#7f8082', lineHeight: 20, marginTop: 5}}>IG. Dark mode concept.</Text>
                        </View>
                        <View style={{width: '100%',flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-heart" size={18} color="#ea4c89" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>252 likes</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-chatbubbles" size={19} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>11 replies</Text>
                            <TouchableOpacity style={{width: 18, height: 18}}>
                                <Ionicons name="ios-folder" size={18} color="#444444" />
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: "#444444", paddingLeft: 3, paddingRight: 10}}>103 saves</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default FeedFocusIn;