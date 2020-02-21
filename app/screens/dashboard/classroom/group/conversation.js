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
import Header from '../../../../components/group/header';

const {width, height} = Dimensions.get('window');

class GroupConversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 'conversation',
            conversation: '',
            keyheight: 0,
            keystatus: false
        },
        this.showKeyboard = new Animated.Value(0);
        this.hideKeyboard = new Animated.Value(0);
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

    setConversation = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const showkeyboardsty = this.showKeyboard.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -this.state.keyheight-30]
        });
        const hidekeyboardsty = this.hideKeyboard.interpolate({
            inputRange: [0, 1],
            outputRange: [-this.state.keyheight-30, 0]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width:'100%', height: height / 14}}>
                    <Header screen={this.state.screen} />
                </View>
                <View style={{width: '100%', height: height / 1.08}}>
                    <Animated.View style={{width: '100%', height: 65, position: 'absolute', bottom: 0, zIndex: 999, transform: [{translateY: this.state.keystatus === true ? hidekeyboardsty : showkeyboardsty}]}}>
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
                                        <TouchableOpacity style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#41aeff',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                            <SimpleLineIcons name="paper-clip" size={14} color="#ffffff" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4f55fd',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff', marginLeft: 10}}>
                                            <SimpleLineIcons name="picture" size={14} color="#ffffff" />
                                        </TouchableOpacity>
                                    </View> :
                                    <View style={{width: '100%', height: 45, backgroundColor: '#f5f5f5', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth: .5,
                                        borderColor: '#f1f1f1', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                                        <TouchableOpacity style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3d72de',
                                            borderRadius: 50, elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                                            <SimpleLineIcons name="paper-plane" size={14} color="#ffffff" style={{transform: [{rotate: '-45deg'}]}}/>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

export default GroupConversation;