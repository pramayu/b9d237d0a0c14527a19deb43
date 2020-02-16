import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Animated
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/task/header';
import Categori from '../../../../components/task/categori';
import ListTask from '../../../../components/task/listtask';

const {width, height} = Dimensions.get('window');

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onoff: false
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
                <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
                <View style={{width:'100%', height: height / 14}}>
                    <Header switchOn={switchOn} switchOff={switchOff} onoff={this.state.onoff} setSwitchAccess={this.setSwitchAccess} />
                </View>
                <View style={{width:'100%', height: height / 10, paddingTop: 10}}>
                    <Categori />
                </View>
                <View style={{width:'100%', height: height / 1.2}}>
                    <ListTask />
                </View>
            </View>
        )
    }
}

export default Task;