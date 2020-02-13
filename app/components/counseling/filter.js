import React from 'react';
import {
    View, Text, Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const TeacherFilter = (props) => {
    return (
        <View style={{width: '100%', flexDirection: 'column'}}>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 8}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/7042167/image.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#fbe610'}}>Rebeca Mendonça</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#c1ccff'}}>Math Expert</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: 35, height: 35, backgroundColor: '#40496f', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="ios-chatbubbles" size={20} color="#c1ccff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 8}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/1787323/screenshots/9028692/shot-cropped-1576296649496.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#fbe610'}}>Donna Lumaad</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#c1ccff'}}>Chemistry Expert</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: 35, height: 35, backgroundColor: '#40496f', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="ios-chatbubbles" size={20} color="#c1ccff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '100%', height: width / 5.5, flexDirection: 'row', marginBottom: 8}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/9841293/rice-kitty.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#fbe610'}}>Dinda Febriyanti</Text>
                    <Text style={{fontFamily: 'Brandon_Regular', fontSize: 15, color: '#c1ccff'}}>Sosiology Expert</Text>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: 35, height: 35, backgroundColor: '#40496f', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="ios-chatbubbles" size={20} color="#c1ccff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TeacherFilter;