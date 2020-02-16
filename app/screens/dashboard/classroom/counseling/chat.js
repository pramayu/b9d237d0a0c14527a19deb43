import React, {Component} from 'react';
import {
    View, Text, Dimensions, StatusBar,
    TextInput,
    TouchableOpacity,
    Animated
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/counseling/header';

const {width, height} = Dimensions.get('window');

class UserChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.showactionbtn = new Animated.Value(0);
        this.hideactionbtn = new Animated.Value(0);
    }

    set_ShowActionbtn = () => {
        Animated.timing(this.showactionbtn, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            this.setState({status: true})
            this.hideactionbtn.setValue(0)
        })
    }

    set_HideActionbtn = () => {
        Animated.timing(this.hideactionbtn, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            this.setState({status: false})
            this.showactionbtn.setValue(0)
        })
    }

    render() {
        const showactionbtnsty = this.showactionbtn.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0]
        });
        const hideactionbtnsty = this.hideactionbtn.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100]
        });
        return(
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header screen={"userchat"} />
                </View>
                <View style={{width: '100%', height: height / 1.25}}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                        <View style={{width: '100%'}}>
                            <View style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                                <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 5, backgroundColor: '#f5f5f5',
                                alignSelf: 'center', paddingVertical: 4, paddingHorizontal: 15, borderRadius: 10}}>15 FEB 2020</Text>
                            </View>
                            <TouchableOpacity onLongPress={(e) => this.set_ShowActionbtn()} style={{paddingRight: '25%', marginBottom: 10, alignItems: 'flex-start'}}>
                                <Text style={{alignSelf: 'flex-start', paddingVertical: 10, paddingTop: 12, paddingHorizontal: 15, borderRadius: 15, fontFamily: 'Brandon_Regular', fontSize: 16, lineHeight: 19,
                                    backgroundColor: '#3d72de', color:'#ffffff', borderBottomLeftRadius: 2}}>The driver carries a huge responsibility so he steers carefully</Text>
                                <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 2}}>12:01PM <Ionicons name="ios-done-all" size={24} color="#3d72de" /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft: '25%', marginBottom: 10, alignItems: 'flex-end'}}>
                                <Text style={{alignSelf: 'flex-end', paddingVertical: 10, paddingTop: 12, paddingHorizontal: 15, borderRadius: 15, fontFamily: 'Brandon_Regular', fontSize: 16, lineHeight: 19,
                                    backgroundColor: '#f5f5f5', color:'#323a5a', borderBottomRightRadius: 2}}>Awesome work! Tasty done!!</Text>
                                <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 5}}>12:10PM</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{width: width, height: 65, backgroundColor: '#ffffff', position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: 99, paddingHorizontal: 20}}>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '82%', justifyContent: 'center', height: '100%'}}>
                            <TextInput placeholder="Type Something.." placeholderTextColor="#323a5a"
                                style={{width: '100%', height: 45, backgroundColor: '#f5f5f5', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderRightWidth: 0,
                                paddingHorizontal: 20, fontFamily: 'Brandon_Regular', fontSize: 16, color: '#323a5a', paddingVertical: 0, borderWidth: .5, borderColor: '#f1f1f1'}} />
                        </View>
                        <View style={{width: '18%', justifyContent: 'center', height: '100%', }}>
                            <View style={{width: '100%', height: 45, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#f5f5f5',
                            borderTopRightRadius: 20, borderBottomRightRadius: 20,borderWidth: .5, borderColor: '#f1f1f1', borderLeftWidth: 0, paddingRight: 5}}>
                                <TouchableOpacity style={{width: 35, height: 35, backgroundColor: '#3d72de', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                    <Ionicons name="ios-send" size={20} color="#ffffff" style={{transform:[{rotate: '-45deg'}]}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <Animated.View style={{width: width, height: 65, backgroundColor: '#ffffff', position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: 999,
                    paddingHorizontal: 20, transform: [{translateY: this.state.status === false ? showactionbtnsty : hideactionbtnsty}]}}>
                    <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                        <View style={{width: '60%', justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{marginRight: 20, width: 35, height: 35, backgroundColor: '#319aba', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                    <Ionicons name="ios-repeat" size={20} color="#ffffff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight: 20, width: 35, height: 35, backgroundColor: '#ea4c89', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                    <Ionicons name="ios-flame" size={20} color="#ffffff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight: 20, width: 35, height: 35, backgroundColor: '#6273ff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                    <Ionicons name="ios-undo" size={20} color="#ffffff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width: '40%', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={(e) => this.set_HideActionbtn()} style={{width: 35, height: 35, backgroundColor: '#3d72de', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                <Ionicons name="ios-arrow-round-down" size={20} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

export default UserChat;