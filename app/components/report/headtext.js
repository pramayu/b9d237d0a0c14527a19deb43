import React from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

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
                <View style={{width: '45%'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444', marginBottom: 5}}>Dmitro Petrenko</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#eef3ff', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 4, backgroundColor: '#3d72de'}}>KELAS-XIIA</Text>
                </View>
                <View style={{width: '37%', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={{width: 40, height: 40, backgroundColor: '#3d72de', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleLineIcons name="equalizer" size={18} color="#eef3ff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HeadText;