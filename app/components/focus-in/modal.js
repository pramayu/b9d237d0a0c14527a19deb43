import React from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');


const ModalFocusIn = (props) => {
    return (
        <View style={{width: width, height: '100%', position: 'absolute', zIndex: 9999, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: 'rgba(255,255,255,.8)'}}>
            <View style={{width: '100%', height: height / 2, backgroundColor: '#323a5a', borderRadius: 6, elevation: 20}}>
            </View>
        </View>
    )
}

export default ModalFocusIn;