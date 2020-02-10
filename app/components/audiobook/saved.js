import React from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const SavedAudio = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', marginTop: 20}}>
            <View style={{width: width / 2.5,height: '100%', marginRight: 25}}>
                <View style={{width: width / 2.5,height: width / 2.4, backgroundColor: '#ededed', borderRadius: 10, elevation: 10, borderWidth: 2, borderColor: '#fff',}}>
                    <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10}}
                        source={{uri: 'https://cdn.dribbble.com/users/105681/screenshots/5315985/thnx.png'}} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', marginTop: 10, paddingHorizontal: 8}}>
                    <View style={{width: '70%'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>FreeStyle Chou</Text>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999'}}>Drew Lakin</Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{paddingTop: 5}}>
                            <Ionicons name="ios-bookmark" size={20} color="#323a5a" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width: width / 2.5,height: '100%', marginRight: 25}}>
                <View style={{width: width / 2.5,height: width / 2.4, backgroundColor: '#ededed', borderRadius: 10, elevation: 10, borderWidth: 2, borderColor: '#fff'}}>
                    <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10}}
                        source={{uri: 'https://cdn.dribbble.com/users/105681/screenshots/4404187/tiger-psalms-23.png'}} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', marginTop: 10, paddingHorizontal: 8}}>
                    <View style={{width: '70%'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>Tiger Psalms</Text>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999'}}>Viet Huynhn</Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{paddingTop: 5}}>
                            <Ionicons name="ios-bookmark" size={20} color="#323a5a" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SavedAudio;