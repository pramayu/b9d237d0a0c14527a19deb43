import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const renderWeeks = () => {
    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, index) => {
        return (
            <View key={index} style={{width: 40, alignItems: 'center', marginTop: 20}}>
                <Text style={{color: '#ffffff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12}}>{day.toUpperCase()}</Text>
            </View>
        )
    })
}

const renderEmptyDate = (props) => {
    return Array(props.firstDay).fill(0).map((xrt, index) => {
        return (
            <TouchableOpacity key={index} style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center',
                borderRadius: 100, marginHorizontal: 2.5, marginVertical: 2.5}}>
            </TouchableOpacity>
        )
    })
}

const renderCalendar = (props) => {
    return props.calendars.map((calendar, index) => {
        const chooseDate = `${calendar.monthnum}/${calendar.daynum}/${calendar.year}`;
        return (
            <TouchableOpacity onPress={(e) => props.setChooseDate(chooseDate)} key={index} style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center',
                borderRadius: 100, marginHorizontal: 2.5, marginVertical: 2.5, backgroundColor: chooseDate === props.chooseDate ? '#ea4c89' : '#323a5a',
                elevation: calendar.daynum === props.currentDats ? 20 : 0, borderWidth: calendar.daynum === props.currentDats ? 1 : chooseDate === props.chooseDate ? 1 : 0, borderColor: '#ffffff'}}>
                <Text style={{color: '#ffffff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 14}}>{calendar.daynum}</Text>
            </TouchableOpacity>
        )
    })
}

const EventModal = (props) => {
    return (
        <View style={{width: '100%', height: height / 1.8, backgroundColor: '#323a5a', borderRadius: 6, elevation: 20, paddingHorizontal: 15, paddingVertical: 10}}>
            <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
                <View style={{width: '70%', height: '100%'}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>FILTER EVENT</Text>
                </View>
                <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={(e) => {
                        props.setHdeModal();
                        props.setModalStatus(true);
                        }} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                        <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
                { renderWeeks() }
                { renderEmptyDate(props) }
                { renderCalendar(props) }
            </View>
            <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, backgroundColor: '#6298ff',
                position: 'absolute', bottom: 15, left: 15, elevation: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff'}}>FILTER</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EventModal;