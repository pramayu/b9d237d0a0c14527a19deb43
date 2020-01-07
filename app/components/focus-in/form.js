import React from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const FormSearch = (props) => {
    return (
        <View style={{width: '100%', flexDirection: 'row'}}>
            <View style={{width: '8%'}}>
                <View style={{width: '100%', height: 40, borderTopLeftRadius: 6, borderBottomLeftRadius: 6, borderWidth: 1, borderColor: '#f1f1f1', borderRightWidth: 0,
                    backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <SimpleLineIcons name="magnifier" size={14} color="#444444" />
                </View>
            </View>
            <View style={{width: '82%'}}>
                <TextInput placeholder="Seacrh hobbies here..." placeholderTextColor="#444444"
                    style={{width: '100%', backgroundColor: '#f5f5f5', height: 40, paddingHorizontal: 10, borderWidth: 1, fontFamily: 'SourceSansPro-Regular',
                    borderLeftWidth: 0, borderRightWidth: 0, borderColor: '#f1f1f1', color: '#444444', fontStyle: 'italic', fontSize:  12}} />
            </View>
            <View style={{width: '10%'}}>
                <TouchableOpacity style={{width: '100%', height: 40, borderTopRightRadius: 6, borderBottomRightRadius: 6, borderWidth: 1, borderColor: '#f1f1f1', borderLeftWidth: 0,
                    backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="arrow-right" size={14} color="#444444" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormSearch;