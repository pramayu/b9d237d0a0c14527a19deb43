import React from 'react';
import {
    View, Text, TouchableOpacity, TouchableOpacityBase
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const renderWeek = () => {
    return ['S','M','T','W','T','F','S'].map((day, index) => {
        return (
            <View key={index} style={{width: 40, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: '#444'}}>{day}</Text>
            </View>
        )
    })
}

const renderDays = (props) => {
    return props.currentWeek.map((week, index) => {
        return (
            <View key={index} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: props.currentDate === week.date ? '#3d72de' : '#ffffff', borderRadius: 100, width: 35, height: 35,
                    justifyContent: 'center', alignItems: 'center', elevation: props.currentDate === week.date ? 10 : 0, borderWidth: .5, borderColor: '#ffffff'}}>
                    <Text style={{fontFamily: 'Brandon_Medium', fontSize: 14, color: props.currentDate === week.date ? '#ffffff' : '#444444'}}>{week.date}</Text>
                </TouchableOpacity>
            </View>
        )
    })
}

const Calendar = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                {renderWeek()}
            </View>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                {renderDays(props)}
            </View>
        </View>
    )
}

export default Calendar;