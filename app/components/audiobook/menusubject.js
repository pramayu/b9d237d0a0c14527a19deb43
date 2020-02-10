import React from 'react';
import {
    View, Text, TouchableOpacity,
    Animated
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const MenuSubject = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', paddingTop: 10}}>
           <TouchableOpacity style={{marginRight: 35}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#323a5a', fontSize: 13, paddingVertical: 4}}>OVERVIEW</Text>
               <View style={{width: 15, height: 2, backgroundColor: "#3d72de", borderRadius: 2}}></View>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight: 35}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#cfcfcf', fontSize: 12, paddingVertical: 4}}>B.INDONESIA</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight: 35}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#cfcfcf', fontSize: 12, paddingVertical: 4}}>CHEMISTRY</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight: 35}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#cfcfcf', fontSize: 12, paddingVertical: 4}}>BIOLOGY</Text>
           </TouchableOpacity>
        </View>
    )
}

export default MenuSubject;