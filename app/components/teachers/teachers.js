import React from 'react';
import {
    View, Text, Dimensions, Image
} from 'react-native';

const {width, height} = Dimensions.get('window');

const TeacherList = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <View style={{width: '47%', height: width / 1.9, backgroundColor: '#265abf', marginTop: 15, borderRadius: 6, justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                <View style={{width: 80, height: 80, backgroundColor: 'rgba(255,255,255,.0)', marginBottom: 10, elevation: 20, borderRadius: 50}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover', borderWidth: .5, borderColor: '#bad1ff'}}
                    source={{uri: 'https://cdn.dribbble.com/users/44324/screenshots/7127355/spaceskull_2x.jpg'}} />
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#ffd61c'}}>Fátima Lopes</Text>
                <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#bad1ff'}}>Mathematic Expert</Text>
            </View>
            <View style={{width: '47%', height: width / 1.9, backgroundColor: '#265abf', marginTop: 15, borderRadius: 6, justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                <View style={{width: 80, height: 80, backgroundColor: 'rgba(255,255,255,.0)', marginBottom: 10, elevation: 20, borderRadius: 50}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover', borderWidth: .5, borderColor: '#bad1ff'}}
                    source={{uri: 'https://cdn.dribbble.com/users/2674005/screenshots/5432107/deb800x6002.jpg'}} />
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#ffd61c'}}>Deiverson Cortes</Text>
                <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#bad1ff'}}>Sosiologi Expert</Text>
            </View>
        </View>
    )
}

export default TeacherList;