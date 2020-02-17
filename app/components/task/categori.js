import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Categori = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: width, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>MATHEMATIKA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>CHEMISTRY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>PHYSICS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>ENGLISH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>EKONOMI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>BIOLOGI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>B.INDONESIA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>SOSIOLOGI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>GEGRAPHY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, backgroundColor: '#ffffff', borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 6, paddingTop: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>JURUSAN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Categori;