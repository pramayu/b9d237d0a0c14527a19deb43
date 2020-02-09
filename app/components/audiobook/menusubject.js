import React from 'react';
import {
    View, Text, TouchableOpacity,
    Animated
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const MenuSubject = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', paddingTop: 15}}>
           <TouchableOpacity style={{marginRight: 8}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10, backgroundColor: '#323a5a'}}>Overview</Text>
           </TouchableOpacity>
           {/* show after search button pressed */}
           {/* <TouchableOpacity style={{marginRight: 8}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#323a5a', fontSize: 14, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10}}>B.Indonesia</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight: 8}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#323a5a', fontSize: 14, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10}}>Chemistry</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginRight: 8}}>
               <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#323a5a', fontSize: 14, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10}}>Biology</Text>
           </TouchableOpacity> */}
        </View>
    )
}

export default MenuSubject;