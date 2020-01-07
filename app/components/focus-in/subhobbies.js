import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

const SubHobbi = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#ffffff', elevation: 20}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#ffffff'}}>PYTHON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>PHP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>JAVA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>RUBY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>C++</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>JAVASCRIPT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubHobbi;