import React from 'react';
import {
    View, Text, Dimensions, TouchableOpacity, Image
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const BookContent = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '15%', height: '100%'}}>
                <View style={{width: '100%', height: '15%'}}>
                    <TouchableOpacity style={{borderRadius: 20, width: 90, height: 28, justifyContent: 'center', backgroundColor: '#3d72de', alignItems: 'center',
                    transform: [{rotate: '90deg'}, {translateY: 0}, {translateX: 40}], elevation: 10}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff'}}>GRADE-X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: '15%'}}>
                    <TouchableOpacity style={{borderRadius: 20, width: 90, height: 28, justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center',
                    transform: [{rotate: '90deg'}, {translateY: 0}, {translateX: 30 * 2}]}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444'}}>GRADE-XI</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: '15%'}}>
                    <TouchableOpacity style={{borderRadius: 20, width: 90, height: 28, justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center',
                    transform: [{rotate: '90deg'}, {translateY: 0}, {translateX: 30 * 3}]}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444'}}>GRADE-XII</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '85%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 50, paddingTop: 10}}>
                <View style={{width: '75%', marginBottom: 20}}>
                    <View style={{width: '100%', height: width / 1.15, elevation: 20, backgroundColor: '#ffffff', borderRadius: 6}}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: 'cover'}}
                            source={{uri: 'https://mangahelpers.com/forum/media/bnha-volume-25.23135/full?code=38909ddb'}} />
                        <TouchableOpacity style={{width: '100%', height: '100%', position: 'absolute', zIndex: 99, backgroundColor: 'rgba(0,0,0,.1)', borderRadius: 6}}></TouchableOpacity>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 16, color: '#444', alignSelf: 'flex-start'}}>The Connections in You</Text>
                        <Ionicons name="ios-more" size={20} color="#ea4c89" style={{alignSelf: 'flex-start', marginLeft: 5, marginTop: 5}}/>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#999'}}>Curtis Hewit</Text>
                </View>
                <View style={{width: '20%', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>280</Text>
                    <TouchableOpacity>
                        <Ionicons name="ios-heart" size={20} color="#ea4c89" style={{marginBottom: 10}}/>
                    </TouchableOpacity>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>170</Text>
                    <Ionicons name="ios-glasses" size={22} color="#bbb" style={{marginBottom: 10}}/>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>40</Text>
                    <Ionicons name="ios-planet" size={22} color="#bbb" style={{marginBottom: 10}}/>
                </View>
                <View style={{width: '75%', marginBottom: 20}}>
                    <View style={{width: '100%', height: width / 1.15, elevation: 20, backgroundColor: '#ffffff', borderRadius: 6}}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: 'cover'}}
                            source={{uri: 'https://kaizobi.files.wordpress.com/2016/02/owari_no_seraph_volume_7_english_cover.jpg?w=764'}} />
                        <TouchableOpacity style={{width: '100%', height: '100%', position: 'absolute', zIndex: 99, backgroundColor: 'rgba(0,0,0,.1)', borderRadius: 6}}></TouchableOpacity>
                    </View>
                    <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 16, color: '#444', alignSelf: 'flex-start'}}>The Connections in You..</Text>
                        <Ionicons name="ios-more" size={20} color="#ea4c89" style={{alignSelf: 'flex-start', marginLeft: 5}}/>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#999', paddingTop: 2}}>Curtis Hewit</Text>
                </View>
                <View style={{width: '20%', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>140</Text>
                    <TouchableOpacity>
                        <Ionicons name="ios-heart" size={20} color="#bbb" style={{marginBottom: 10}}/>
                    </TouchableOpacity>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>40</Text>
                    <Ionicons name="ios-glasses" size={22} color="#bbb" style={{marginBottom: 10}}/>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', paddingTop: 2}}>35</Text>
                    <Ionicons name="ios-planet" size={22} color="#bbb" style={{marginBottom: 10}}/>
                </View>
            </View>
        </View>
    )
}

export default BookContent;