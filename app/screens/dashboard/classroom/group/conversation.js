import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Keyboard,
    TextInput,
    TouchableOpacity,
    Animated
} from 'react-native';
import { style }  from '../../../../styles/sty';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import Header from '../../../../components/group/header';
import ListChat from '../../../../components/group/listchat';

const {width, height} = Dimensions.get('window');

class GroupConversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'conversation',
            conversation: '',
            keyheight: 0,
            keystatus: false,
            edrestaus: false
        },
        this.showKeyboard = new Animated.Value(0);
        this.hideKeyboard = new Animated.Value(0);
        this.showEdelRepl = new Animated.Value(0);
        this.hideEdelRepl = new Animated.Value(0);
    }

    componentDidMount = () => {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (e) => {
        this.setState({keyheight: e.endCoordinates.height});
        Animated.timing(this.showKeyboard, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            this.setState({keystatus: true})
            this.hideKeyboard.setValue(0)
        })
    }
    
    _keyboardDidHide = () => {
        Animated.timing(this.hideKeyboard, {
            toValue: 1,
            duration: 80,
            useNativeDriver: true
        }).start(() => {
            this.setState({keystatus: false, keyheight: 0})
            this.showKeyboard.setValue(0)
        })
    }

    setShowEdelRepl = () => {
        Animated.timing(this.showEdelRepl, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            this.setState({ edrestaus: true })
            this.hideEdelRepl.setValue(0)
        })
    }

    setHideEdelRepl = () => {
        Animated.timing(this.hideEdelRepl, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            this.setState({ edrestaus: false })
            this.showEdelRepl.setValue(0)
        })
    }

    setConversation = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const showkeyboardsty = this.showKeyboard.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -this.state.keyheight-25]
        });
        const hidekeyboardsty = this.hideKeyboard.interpolate({
            inputRange: [0, 1],
            outputRange: [-this.state.keyheight-25, 0]
        });
        const showEdelReplSty = this.showEdelRepl.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 0]
        });
        const hideEdelReplSty = this.hideEdelRepl.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width:'100%', height: height / 14}}>
                    <Header screen={this.state.screen} />
                </View>
                <View style={{width: '100%', height: height / 1.08}}>
                    <View style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                        <ListChat setShowEdelRepl={this.setShowEdelRepl} />
                    </View>
                    <Animated.View style={{width: '100%', height: 65, position: 'absolute', bottom: 0, zIndex: 998, backgroundColor: '#fff',
                        transform: [{translateY: this.state.keystatus === true ? hidekeyboardsty : showkeyboardsty}]}}>
                        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                            <View style={{width: this.state.conversation.length > 0 ? '85%':'70%', justifyContent: 'center'}}>
                                <TextInput placeholder="Type Something.." placeholderTextColor="#323a5a" onChangeText={(txt) => this.setConversation('conversation', txt)}
                                    style={{width: '100%', height: 45, backgroundColor: '#f5f5f5', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderRightWidth: 0,
                                    paddingHorizontal: 20, fontFamily: 'Brandon_Regular', fontSize: 16, color: '#323a5a', paddingVertical: 0, borderWidth: .5, borderColor: '#f1f1f1'}} />
                            </View>
                            <View style={{width: this.state.conversation.length > 0 ? '15%':'30%', justifyContent: 'center'}}>
                                {
                                    this.state.conversation.length === 0 ?
                                    <View style={{width: '100%', height: 45, backgroundColor: '#f5f5f5', borderTopRightRadius: 20, borderBottomRightRadius: 20,
                                        borderWidth: .5, borderColor: '#f1f1f1', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 10}}>
                                        <TouchableOpacity style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#41aeff',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                            <SimpleLineIcons name="paper-clip" size={14} color="#ffffff" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4f55fd',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff', marginLeft: 10}}>
                                            <SimpleLineIcons name="picture" size={14} color="#ffffff" />
                                        </TouchableOpacity>
                                    </View> :
                                    <View style={{width: '100%', height: 45, backgroundColor: '#f5f5f5', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth: .5,
                                        borderColor: '#f1f1f1', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                                        <TouchableOpacity style={{width: 35, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3d72de',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                            <SimpleLineIcons name="paper-plane" size={14} color="#ffffff" style={{transform: [{rotate: '-45deg'}]}}/>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    </Animated.View>
                    <Animated.View style={{width: '100%', height: 65, position: 'absolute', bottom: 0, zIndex: 999, backgroundColor: '#fff',
                        transform: [{translateY: this.state.edrestaus === false ? showEdelReplSty : hideEdelReplSty}]}}>
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
                                <TouchableOpacity onPress={(e) => this.setHideEdelRepl()} style={{width: 35, height: 35, backgroundColor: '#3d72de', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                    <Ionicons name="ios-arrow-round-down" size={20} color="#ffffff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

export default GroupConversation;