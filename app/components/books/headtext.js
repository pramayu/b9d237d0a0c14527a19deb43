import React from 'react';
import {
    View, Text, Image,
    TextInput, TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const HeadText = (props) => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
            <View style={{paddingRight: '30%'}}>
                <Text style={{fontFamily: 'Brandon_Bold', fontSize: 28, color: '#323a5a'}}>What would you read, Paulina?</Text>
            </View>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 30}}>
                <View style={{width: '10%'}}>
                    <View style={{width: '100%', height: 45, borderTopLeftRadius: 10, borderRightWidth: 0, borderWidth: 0, borderColor: '#fff',
                        borderBottomLeftRadius: 10, backgroundColor: '#f6f6f4', justifyContent: 'center', alignItems: 'flex-end', elevation: props.search.length > 0 ? 25 : 0}}>
                            <SimpleLineIcons name="magnifier" size={16} color="#4c4c4a" />
                    </View>
                </View>
                <View style={{width: '70%'}}>
                    <TextInput placeholder="Search Book, Podcast, etc." placeholderTextColor="#4c4c4a" onChangeText={(txt) => props.setChangeSearch(txt)}
                        style={{width: '100%', height: 45, backgroundColor: '#f6f6f4', borderLeftWidth: 0, borderRightWidth: 0, paddingLeft: 10,
                        borderWidth: 0, borderColor: '#fff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#4c4c4a', elevation: props.search.length > 0 ? 25 : 0}} />
                </View>
                <View style={{width: '20%'}}>
                    <View style={{width: '100%', height: 45, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 0, borderWidth: 0, borderColor: '#fff',
                        borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#f6f6f4', elevation: props.search.length > 0 ? 25 : 0}}>
                        <TouchableOpacity style={{width: '100%', height: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 10}}>
                            <SimpleLineIcons name="arrow-right" size={16} color="#4c4c4a" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HeadText;