import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image
} from 'react-native';

const HeadText = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <Text style={{fontFamily: 'SourceSansPro-Regular', color: '#444', fontSize: 16}}>Hello Lobanovskiy,</Text>
            <Text style={{fontFamily: 'Brandon_Regular', color: '#444', fontSize: 22, marginTop: 3}}>What You Learned Yesterday?</Text>
        </View>
    )
}

export default HeadText;