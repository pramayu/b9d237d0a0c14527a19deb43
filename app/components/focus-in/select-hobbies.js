import React from 'react';
import {
    View, Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectHobbi = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10, marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>YOUTUBER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>BREEDER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>MUSICIAN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>TRANSLATOR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>CHEF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#ffffff', elevation: 20}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#ffffff'}}>PROGRAMMER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 8, borderRadius: 4, marginRight: 10,marginBottom: 10,
                alignSelf: 'flex-start', backgroundColor: '#f4f4f4', borderWidth: 1, borderColor: '#f1f1f1'}}>
                <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444444'}}>ETC.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectHobbi;