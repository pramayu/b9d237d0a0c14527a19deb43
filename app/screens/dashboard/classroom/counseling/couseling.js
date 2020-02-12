import React, {Component} from 'react';
import {
    View, Text, Dimensions,
    StatusBar, Animated, TouchableOpacity, TextInput
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/counseling/header';
import Conversation from '../../../../components/counseling/conversation';

const {width, height} = Dimensions.get('window');

class Counseling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: 0,
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
                <View style={{width: '100%', height: height / 1.12}}>
                    <Conversation />
                </View>
                <View style={{width: 45, height: 45, position: 'absolute', borderRadius: 100, bottom: 20, right: 20, elevation: this.state.elevation, backgroundColor: '#ededed', zIndex: 99}}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', borderRadius: 100, alignItems: 'center', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#fff'}}>
                        <SimpleLineIcons name="energy" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{width: width, height: height, position: 'absolute', zIndex: 999, backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'flex-end'}}>
                    <View style={{width: '100%', height: height / 1.5, borderTopRightRadius: 40, borderTopLeftRadius: 40, backgroundColor: '#323a5a', paddingHorizontal: 20, paddingTop: 10}}>
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <TouchableOpacity style={{width: 45, height: 18, justifyContent: 'center'}}>
                                <View style={{width: '100%', borderRadius:4, height: 3, backgroundColor: '#fbe610'}}></View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', marginTop: 10, flexDirection: 'row'}}>
                            <View style={{width: '10%'}}>
                                <View style={{width: '100%', height: 43, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#353f60', borderTopLeftRadius: 12, borderBottomLeftRadius: 12}}>
                                    <SimpleLineIcons name="magnifier" size={18} color="#fbe610" />
                                </View>
                            </View>
                            <View style={{width: '90%'}}>
                                <TextInput placeholder="Discover teacher" placeholderTextColor="#fbe610"
                                    style={{width: '100%', height: 43, backgroundColor: '#353f60', borderTopRightRadius: 12,
                                    borderBottomRightRadius: 12, paddingHorizontal: 15, fontSize: 16, fontFamily: 'Brandon_Medium', color:"#fbe610"}} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Counseling;