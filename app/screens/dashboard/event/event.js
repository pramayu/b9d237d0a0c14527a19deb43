import React, {Component} from 'react';
import {
    View, Text, StatusBar, Dimensions
} from 'react-native';
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
            </View>
        )
    }
}

export default Event;