import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Animated,
    TouchableOpacity, Image,
    TextInput, Keyboard
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/group/header';
import ListGroup from '../../../../components/group/listgroup';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: 8,
            modals: false,
            keystatus: false,
            keyheight: 0
        },
        this.showmodal = new Animated.Value(0);
        this.hidemodal = new Animated.Value(0);
        this.showKeybo = new Animated.Value(0);
        this.hideKeybo = new Animated.Value(0);
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
        this.setState({
            keyheight: e.endCoordinates.height
        })
        Animated.timing(this.showKeybo, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                keystatus: true
            })
            this.hideKeybo.setValue(0)
        })
    }
    
    _keyboardDidHide = () => {
        Animated.timing(this.hideKeybo, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                keystatus: false,
                keyheight: 0
            })
            this.showKeybo.setValue(0)
        })
    }

    setShowModal = () => {
        this.setState({
            elevation: 0
        })
        Animated.timing(this.showmodal, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                modals: true
            })
            this.hidemodal.setValue(0)
        })
    }

    setHideModal = () => {
        Animated.timing(this.hidemodal, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                modals: false,
                elevation: 8
            })
            this.showmodal.setValue(0)
        }) 
    }

    render() {
        const showmodalsty = this.showmodal.interpolate({
            inputRange: [0, 1],
            outputRange: [height, 0]
        });
        const hidemodalsty = this.hidemodal.interpolate({
            inputRange: [0, 1],
            outputRange: [0, height]
        });
        const keyboardshowsty = this.showKeybo.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -this.state.keyheight]
        });
        const keyboardhidesty = this.hideKeybo.interpolate({
            inputRange: [0, 1],
            outputRange: [-this.state.keyheight, 0]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width:'100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width:'100%', height: height / 1.1, paddingTop: 10}}>
                    <ListGroup elevation={this.state.elevation}/>
                </View>
                <View style={{width: 45, height: 45, position: 'absolute', borderRadius: 100, bottom: 20, right: 20, elevation: this.state.elevation, backgroundColor: '#ededed', zIndex: 99}}>
                    <TouchableOpacity onPress={(e) => this.setShowModal()} style={{width: '100%', height: '100%', justifyContent: 'center', borderRadius: 100, alignItems: 'center', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#fff'}}>
                        <SimpleLineIcons name="energy" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Animated.View style={{width: width, height: height, position: 'absolute', zIndex: 999, backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'flex-end',
                    transform: [{translateY: this.state.modals === false ? showmodalsty : hidemodalsty}]}}>
                    <Animated.View style={{width: '100%', height: height / 1.7, backgroundColor: '#323a5a', borderTopRightRadius: 40, borderTopLeftRadius: 40, paddingTop: 10, paddingHorizontal: 20,
                        transform:[{translateY: this.state.keystatus === false ? keyboardshowsty : keyboardhidesty}] }}>
                        <View style={{width: '100%', height: 24, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={(e) => this.setHideModal()} style={{width: 45, height: '100%', justifyContent: 'center'}}>
                                <View style={{width: '100%', borderRadius:4, height: 3, backgroundColor: '#ac9bf5'}}></View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%',marginTop: 20}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ac9bf5', paddingLeft: 10, marginBottom: 5}}>GROUP NAME</Text>
                            <TextInput placeholder="..." placeholderTextColor="#ac9bf5"
                                style={{width: '100%', height: 43, backgroundColor: '#353f60', borderRadius:12, paddingHorizontal: 15, fontSize: 14,
                                fontFamily: 'SourceSansPro-SemiBold', color:"#ac9bf5", marginBottom: 15}} />
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ac9bf5', paddingLeft: 10, marginBottom: 5}}>INVITE BY TEACHER ID</Text>
                            <View style={{width: '100%', height: 43, backgroundColor: '#353f60', borderRadius:12, marginBottom: 15}}>
                                {/* <TextInput placeholder="..." placeholderTextColor="#ac9bf5"
                                    style={{width: '100%', height: '100%', paddingHorizontal: 15, paddingVertical: 0, fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color:"#ac9bf5"}} /> */}
                                <TouchableOpacity style={{flexDirection: 'row', width: '100%', height: 43, padding: 5}}>
                                    <View style={{width: 35, height: '100%', borderRadius: 12, alignSelf: 'flex-start', borderTopRightRadius: 0, borderBottomRightRadius:0, backgroundColor: '#ea4c89', borderWidth: 2, borderColor: '#ea4c89'}}>
                                        <Image style={{width: '100%', height: '100%', borderRadius: 12, resizeMode: 'cover'}}
                                            source={{uri: 'https://cdn.dribbble.com/users/3619723/screenshots/7564022/forest.png'}} />
                                    </View>
                                    <View>
                                        <Text style={{height:'100%', paddingTop: 8, paddingRight: 12, backgroundColor: '#ea4c89', paddingLeft: 5,
                                            fontFamily: 'SourceSansPro-SemiBold', color:'#ffffff', borderTopRightRadius: 12, borderBottomRightRadius:12}}>Leonardus</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ac9bf5', paddingLeft: 10, marginBottom: 5}}>INVITE BY MEMBER ID</Text>
                            <View style={{width: '100%', height: 90, backgroundColor: '#353f60', borderRadius:12, marginBottom: 15}}>
                                <TextInput placeholder="..." placeholderTextColor="#ac9bf5"
                                    style={{width: '80%', height: '40%', paddingHorizontal: 15, paddingVertical: 0, fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color:"#ac9bf5"}} />
                            </View>
                            <TouchableOpacity style={{width: '100%', height: 43, backgroundColor: '#ac9bf5', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>CREATE GROUP</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </Animated.View>
            </View>
        )
    }
}

export default Group;