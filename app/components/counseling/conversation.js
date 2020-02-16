import React from 'react';
import {
    View, Text, Dimensions, Image, TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Conversation = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'column', marginTop: 10}}>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 10}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/1787323/screenshots/9028692/shot-cropped-1576296649496.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Donna Lumaad</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#999'}}>I fell inlove with this song sooo..</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>07:21PM</Text>
                </View>
                <TouchableOpacity onPress={(e) => props.screenToChating()} style={{width: '100%', height: '100%', position: 'absolute', zIndex: 999}}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 10}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/9841293/rice-kitty.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Nilo Dalagan</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#999'}}>This song deserves more atten..</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>12 Feb</Text>
                </View>
            </View>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 10}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/7042167/image.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Rebeca Mendonça</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#999'}}>I have no words to describe..</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>05 Feb</Text>
                </View>
            </View>
        </View>
    )
}

export default Conversation;