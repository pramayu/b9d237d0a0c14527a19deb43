import React from 'react';
import {
    View, Text, Image
} from 'react-native';

const HeadText = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{width: '18%'}}>
                    <View style={{width: 45, height: 45, borderRadius: 100, backgroundColor: '#fff', elevation: 10, borderColor: '#fff', borderWidth: .5}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100}}
                        source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/8193761/untitled_artwork_60.jpg'}}/>
                    </View>
                </View>
                <View style={{width: '82%'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', marginBottom: 5}}>Dmitro Petrenko</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 4, backgroundColor: '#3d72de'}}>KELAS-XII</Text>
                </View>
            </View>
        </View>
    )
}

export default HeadText;