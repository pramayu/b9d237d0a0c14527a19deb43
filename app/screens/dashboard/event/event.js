import React, {Component} from 'react';
import {
    View, Text, StatusBar, Dimensions,
    TouchableOpacity
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

import { style }  from '../../../styles/sty';
import Header from '../../../components/event/header';
import AgendaEvent from '../../../components/event/agenda';
import FeedEvent from '../../../components/event/feed';
import { agendaEvent } from '../../../utils/service/agenda.event';

const {width, height} = Dimensions.get('window');
const currentDate = new Date()


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear         : currentDate.getFullYear(),
            currntMonth         : currentDate.getMonth() + 1,
            currentDats         : currentDate.getDate(),
            firstDay            : currentDate.getDay(),
            currentCalendar     : []
        },
        this.setCurrentCalendar = this.setCurrentCalendar.bind(this);
    }

    componentDidMount = () => {
        this.setCurrentCalendar()
    }

    setCurrentCalendar = () => {
        const result = agendaEvent(this.state.currentYear, this.state.currntMonth);
        if(result.length != 0) {
            this.setState({
                currentCalendar: result
            })
        }
    }

    rendeEventType = () => {
        return ['contest','seminar', 'festival', 'scholarship'].map((eventtype, index) => {
            return (
                <TouchableOpacity key={index} style={{marginRight: 5, marginTop: 5}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 5,
                    paddingTop: 6, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5, borderColor: '#2e3853',}}>{eventtype.toUpperCase()}</Text>
                </TouchableOpacity>
            )
        })
    }

    renderWeeks = () => {
        return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, index) => {
            return (
                <View key={index} style={{width: 40, alignItems: 'center', marginTop: 20}}>
                    <Text style={{color: '#ffffff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12}}>{day.toUpperCase()}</Text>
                </View>
            )
        })
    }

    renderCalendar = (calendars) => {
        return calendars.map((calendar, index) => {
            if(index < this.state.firstDay) {
                return (
                    <TouchableOpacity key={index} style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center',
                        borderRadius: 100, marginHorizontal: 2.5, marginVertical: 2.5}}>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity key={index} style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center',
                        borderRadius: 100, marginHorizontal: 2.5, marginVertical: 2.5, backgroundColor: calendar.daynum === this.state.currentDats ? '#ea4c89' : '#323a5a',
                        elevation: calendar.daynum === this.state.currentDats ? 20 : 0, borderWidth: calendar.daynum === this.state.currentDats ? 1 : 0, borderColor: '#ffffff'}}>
                        <Text style={{color: '#ffffff', fontFamily: 'SourceSansPro-SemiBold', fontSize: 14}}>{calendar.daynum}</Text>
                    </TouchableOpacity>
                )
            }
        })
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 1.1, marginTop: 20}}>
                    <FeedEvent />
                </View>
                <View style={{width: width, height: height, position: 'absolute', backgroundColor: 'rgba(255,255,255,.8)', zIndex: 999, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '100%', height: height / 1.5, backgroundColor: '#323a5a', borderRadius: 6, elevation: 20, paddingHorizontal: 15, paddingVertical: 10}}>
                        <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
                            <View style={{width: '70%', height: '100%'}}>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>FILTER EVENT</Text>
                            </View>
                            <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                                <TouchableOpacity onPress={(e) => setHideModale(props)} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                                    <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap'}}>
                            { this.renderWeeks() }
                            { this.renderCalendar(this.state.currentCalendar) }
                        </View>
                        <View style={{width: '100%', marginTop: 10}}>
                            <View style={{width: '100%', flexDirection: 'row', marginTop: 5, flexWrap: 'wrap'}}>
                                {this.rendeEventType()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Event;