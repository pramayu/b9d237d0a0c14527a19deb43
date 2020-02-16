import React from 'react';
import {
    View, Text
} from 'react-native';

const HeadText = (props) => {
    return(
        <View style={{width: '100%', height: '100%', justifyContent: 'flex-start'}}>
            <Text style={{fontFamily: 'Brandon_Regular', fontSize: 24, color: '#323a5a'}}>Found 70 Teachers</Text>
        </View>
    )
}

export default HeadText;