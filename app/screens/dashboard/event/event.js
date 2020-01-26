import React, {Component} from 'react';
import {
    View, Text, StatusBar, Dimensions,
    TouchableOpacity, Animated
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

import { style }  from '../../../styles/sty';
import Header from '../../../components/event/header';
import AgendaEvent from '../../../components/event/agenda';
import FeedEvent from '../../../components/event/feed';
import EventModal from '../../../components/event/modal';
import { agendaEvent } from '../../../utils/service/agenda.event';
import { showModal, hideModal } from '../../../utils/animated/animated.modal';

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
            elevation           : 10,
            chooseDate          : '',
            currentCalendar     : [],
            modals              : false
        },
        this.setCurrentCalendar = this.setCurrentCalendar.bind(this);
        this.setChooseDate = this.setChooseDate.bind(this);
        this.setModalStatus = this.setModalStatus.bind(this);
        this.setShwModal = this.setShwModal.bind(this);
        this.setHdeModal = this.setHdeModal.bind(this);
        this.setHdeModal = this.setHdeModal.bind(this);

        // animation modal
        this.showmodale = new Animated.Value(0);
        this.hidemodale = new Animated.Value(0);
        this.modalopity = new Animated.Value(0);
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

    setChooseDate = (chooseDate) => {
        this.setState({
            chooseDate
        })
    }

    // show modal function
    setShwModal = () => {
        showModal(this.showmodale, this.hidemodale);
        this.setState({elevation: 0});
    }

    // hide modal function
    setHdeModal = () => {
        hideModal(this.showmodale, this.hidemodale);
        setTimeout(() => {
            this.setState({elevation: 10});
        }, 500);
    }

    setModalStatus = (modals) => {
        this.setState({modals})
    }


    render() {
        const showmdle = this.showmodale.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [height, -10, 0]
        });
        const hidemdle = this.hidemodale.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, -10, height]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header setShwModal={this.setShwModal} setModalStatus={this.setModalStatus} />
                </View>
                <View style={{width: '100%', height: height / 1.1, marginTop: 20}}>
                    <FeedEvent elevation={this.state.elevation} />
                </View>
                <Animated.View style={{width: width, height: height, position: 'absolute', backgroundColor: 'rgba(255,255,255,.8)', zIndex: 999,
                    paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center', transform: [{translateY: this.state.modals === true ? hidemdle : showmdle}]}}>
                    <EventModal firstDay={this.state.firstDay} calendars={this.state.currentCalendar} chooseDate={this.state.chooseDate} currentDats={this.state.currentDats}
                        setChooseDate={this.setChooseDate} setHdeModal={this.setHdeModal} setModalStatus={this.setModalStatus}/>
                </Animated.View>
            </View>
        )
    }
}

export default Event;