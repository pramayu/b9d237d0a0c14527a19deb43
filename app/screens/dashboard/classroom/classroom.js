import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, TouchableOpacity, Animated
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import { style }  from '../../../styles/sty';
import Header from '../../../components/classroom/header';
import HeadText from '../../../components/classroom/headtext';
import Stuff from '../../../components/classroom/stuff';
import History from '../../../components/classroom/history';
import MainMenu from '../../../components/classroom/mainmenu';
import {showModal, hideModal} from '../../../utils/animated/animated.modal';

const {width, height} = Dimensions.get('window');

class ClassRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: true,
            modalstatus: false
        }
        this.showmodal = new Animated.Value(0);
        this.hidemodal = new Animated.Value(0);
        this.goToTask = this.goToTask.bind(this);
        this.goToReport = this.goToReport.bind(this);
        this.setShowModal = this.setShowModal.bind(this);
        this.setHideModal = this.setHideModal.bind(this);
        this.goToSchedule = this.goToSchedule.bind(this);
    }

    

    setShowModal = () => {
        showModal(this.showmodal, this.hidemodal);
        this.setState({modalstatus: true, elevation: false});
    }

    setHideModal = () => {
        hideModal(this.showmodal, this.hidemodal);
        setTimeout(() => {
            this.setState({modalstatus: false, elevation: true})
        }, 500);
    }


    goToSchedule = () => {
        this.props.navigation.navigate('Schedule');
    }

    goToBooks = () => {
        this.props.navigation.navigate('Books')
    }

    goToTask = () => {
        this.props.navigation.navigate('Task');
    }

    goToReport = () => {
        this.props.navigation.navigate('Report');
    }

    render() {
        const modalshow = this.showmodal.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [height, -20, 0]
        });
        const modalhide = this.hidemodal.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, -20, height]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header setShowModal={this.setShowModal} />
                </View>
                <View style={{width: '100%', height: height / 10}}>
                    <HeadText elevation={this.state.elevation} />
                </View>
                <View style={{width: '100%', height: height / 2.6, marginTop: 20}}>
                    <Stuff elevation={this.state.elevation} />
                </View>
                <View style={{width: '100%', height: height / 2.8, marginTop: 20}}>
                    <History elevation={this.state.elevation} />
                </View>
                <Animated.View style={{width: width, height: height, position: 'absolute', backgroundColor: 'rgba(255,255,255,.8)', paddingHorizontal: 30, justifyContent: 'center', transform:[{translateY: this.state.modalstatus ? modalshow : modalshow }]}}>
                    <View style={{width: '100%', height: height / 2, backgroundColor: '#323a5a', borderRadius: 6, elevation: 20, paddingHorizontal: 15, paddingVertical: 10}}>
                        <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
                            <View style={{width: '70%', height: '100%'}}>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>FILTER EVENT</Text>
                            </View>
                            <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                                <TouchableOpacity onPress={(e) => this.setHideModal()} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                                    <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <MainMenu goToSchedule={this.goToSchedule} goToBooks={this.goToBooks} goToTask={this.goToTask} goToReport={this.goToReport} />
                    </View>
                </Animated.View>
            </View>
        )
    }
}

export default ClassRoom;