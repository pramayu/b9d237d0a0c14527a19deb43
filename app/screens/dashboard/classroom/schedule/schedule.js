import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/schedule/header';
import Calendar from '../../../../components/schedule/calendar';
import { getSchedule } from '../../../../utils/service/schedule.classroom';

const {width, height} = Dimensions.get('window');
const currentDate = new Date();
const months = ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember']

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: months[currentDate.getMonth()].toUpperCase(),
            currentWeek: [],
            currentDate: currentDate.getDate()
        }
    }

    componentDidMount = () => {
        this.setCurrentWeek()
    }

    setCurrentWeek = () => {
        let week = getSchedule();
        if(week.length != 0) {
            this.setState({
                currentWeek: week
            })
        }
    }

    render () {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header currentMonth={this.state.currentMonth} />
                </View>
                <View style={{width: '100%', height: height / 7}}>
                    <Calendar currentDate={this.state.currentDate} currentWeek={this.state.currentWeek} currentMonth={this.state.currentMonth} />
                </View>
            </View>
        )
    }
}

export default Schedule;