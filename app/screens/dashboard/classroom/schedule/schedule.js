import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/schedule/header';
import Calendar from '../../../../components/schedule/calendar';
import Lesson from '../../../../components/schedule/lesson';
import { getSchedule } from '../../../../utils/service/schedule.classroom';

const {width, height} = Dimensions.get('window');
const currentDate = new Date();
const months = ['jan','feb','mar','apr','mei','jun','jul','aug','sep','oct','nov','des']

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: months[currentDate.getMonth()].toUpperCase(),
            currentWeek: [],
            currentDate: currentDate.getDate(),
            currentYear: currentDate.getFullYear()
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
            <View style={[style.container, {backgroundColor: '#ffffff'}]}>
                <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 12, backgroundColor: '#f5f5f5', paddingHorizontal: 20}}>
                    <Header currentDate={this.state.currentDate} currentMonth={this.state.currentMonth} currentYear={this.state.currentYear} currentDate={this.state.currentDate} />
                </View>
                <View style={{width: '100%', height: height / 6, backgroundColor: '#f5f5f5'}}>
                    <View style={{paddingHorizontal: 20, paddingTop: 20, backgroundColor: '#ffffff',
                        borderTopRightRadius: 30, borderTopLeftRadius: 30, borderWidth: .5, borderColor: '#f1f1f1', borderBottomWidth: 0}}>
                        <Calendar currentDate={this.state.currentDate} currentWeek={this.state.currentWeek} currentMonth={this.state.currentMonth} />
                    </View>
                </View>
                <View style={{width: '100%', height: height / 1.4, paddingHorizontal: 30, marginTop: 20}}>
                    <Lesson />
                </View>
            </View>
        )
    }
}

export default Schedule;