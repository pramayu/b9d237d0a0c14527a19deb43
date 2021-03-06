import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity,
    Dimensions, StatusBar
} from 'react-native';
import { style }  from '../../styles/sty';
import Header from '../../components/dashboard/header';
import HeadText from '../../components/dashboard/headtext';
import Preview from '../../components/dashboard/preview';
import PinTask from '../../components/dashboard/pintask';
import MainMenu from '../../components/dashboard/mainmenu';

const {width, height} = Dimensions.get('window');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        },
        this.linkToClassRoom    = this.linkToClassRoom.bind(this);
        this.linkToFocusIn      = this.linkToFocusIn.bind(this);
        this.linkToEvent        = this.linkToEvent.bind(this);
    }

    linkToFocusIn = () => {
        this.props.navigation.navigate('FocusIn');
    }

    linkToEvent = () => {
        this.props.navigation.navigate('Event');
    }

    linkToClassRoom = () => {
        this.props.navigation.navigate('ClassRoom')
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%',height: height / 12}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 8}}>
                    <HeadText />
                </View>
                <View style={{width: '100%', height: height / 5.2, marginBottom: 20}}>
                    <Preview />
                </View>
                <View style={{width: '100%', height: height / 4.2, marginBottom: 10, marginTop: 10}}>
                    <MainMenu linkToFocusIn={this.linkToFocusIn} linkToEvent={this.linkToEvent} linkToClassRoom={this.linkToClassRoom} />
                </View>
                <View style={{width: '100%', height: height / 6}}>
                    <PinTask />
                </View>
            </View>
        )
    }
}

export default Dashboard;