import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Animated,
    TouchableOpacity,
    TextInput
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
            elevation: 0
        }
    }

    render() {
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
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', borderRadius: 100, alignItems: 'center', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#fff'}}>
                        <SimpleLineIcons name="energy" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{width: width, height: height, position: 'absolute', zIndex: 999, backgroundColor: 'rgba(255,255,255,.8)', justifyContent: 'flex-end'}}>
                    <View style={{width: '100%', height: height / 1.65, backgroundColor: '#323a5a', borderTopRightRadius: 40, borderTopLeftRadius: 40, paddingTop: 10, paddingHorizontal: 20}}>
                        <View style={{width: '100%', height: 24, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style={{width: 45, height: '100%', justifyContent: 'center'}}>
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
                                <TextInput placeholder="..." placeholderTextColor="#ac9bf5"
                                    style={{width: '100%', height: '100%', paddingHorizontal: 15, paddingVertical: 0, fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color:"#ac9bf5"}} />
                            </View>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ac9bf5', paddingLeft: 10, marginBottom: 5}}>INVITE BY MEMBER ID</Text>
                            <View style={{width: '100%', height: 110, backgroundColor: '#353f60', borderRadius:12, marginBottom: 15}}>
                                <TextInput placeholder="..." placeholderTextColor="#ac9bf5"
                                    style={{width: '80%', height: '40%', paddingHorizontal: 15, paddingVertical: 0, fontSize: 14, fontFamily: 'SourceSansPro-SemiBold', color:"#ac9bf5"}} />
                            </View>
                            <TouchableOpacity style={{width: '100%', height: 43, backgroundColor: '#ac9bf5', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a'}}>CREATE GROUP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Group;