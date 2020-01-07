import React from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
import Header from './header';
import FormSearch from './form';
import SelectHobbi from './select-hobbies';
import SubHobbi from './subhobbies';

const {width, height} = Dimensions.get('window');

const BeforeChoose = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
            <View style={{width: '100%',height: height / 12}}>
                <Header />
            </View>
            <View style={{width: '100%', height: height / 14}}>
                <FormSearch />
            </View>
            <View style={{width: '100%', height: height/ 6, marginTop: 20}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', marginBottom: 10}}>CHOOSE ONE</Text>
                <SelectHobbi />
            </View>
            <View style={{width: '100%', marginTop: 20}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', marginBottom: 10}}>CHOOSE SPECIFIC PROGRAMMER</Text>
                <SubHobbi />
            </View>
        </View>
    )
}

export default BeforeChoose;