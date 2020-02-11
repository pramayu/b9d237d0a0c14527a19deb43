import React, {Component} from 'react';
import {
    View, Text, Dimensions,
    StatusBar, Animated
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/counseling/header';
import TeacherPsi from '../../../../components/counseling/teacher';

const {width, height} = Dimensions.get('window');

class Counseling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onoff: true
        },
        this.setSwitchAccess = this.setSwitchAccess.bind(this);
        this.switchButtonOn = new Animated.Value(0);
        this.switchButtonOf = new Animated.Value(0);
    }

    setSwitchAccess = () => {
        if(this.state.onoff === false) {
            Animated.timing(this.switchButtonOn,{
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start((e) => {
                this.switchButtonOf.setValue(0);
                this.setState({
                    onoff: true
                });
            })
        } else {
            Animated.timing(this.switchButtonOf,{
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start((e) => {
                this.switchButtonOn.setValue(0);
                this.setState({
                    onoff: false
                });
            })
        }
    }

    render() {
        const switchOn = this.switchButtonOn.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 15]
        });
        const switchOff = this.switchButtonOf.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 0]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header switchOn={switchOn} switchOff={switchOff} onoff={this.state.onoff} setSwitchAccess={this.setSwitchAccess} />
                </View>
                <View style={{width: '100%', height: height / 10, marginTop: 10}}>
                    <TeacherPsi />
                </View>
            </View>
        )
    }
}

export default Counseling;