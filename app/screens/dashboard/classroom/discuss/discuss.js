import React, { Component } from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Animated,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/discuss/header';
import DiscussFeed from '../../../../components/discuss/feed';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class Discuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: true,
            modal: false,
            tag: '',
            tags: []
        }
        this.showmodal = new Animated.Value(0);
        this.hidemodal = new Animated.Value(0);
    }

    setTags = (tag, e) => {
        if(e === ' ') {
            this.setState({
                modal: false,
                tags: [...this.state.tags, tag],
                tag: ''
            })
        }
    }

    removeTags = (index) => {
        if(this.state.tags.length > 0) {
            const tags = Object.assign([], this.state.tags)
            tags.splice(index, 1);
            this.setState({
                tags: tags
            })
        }
    }

    setShowModal = () => {
        Animated.timing(this.showmodal, {
            toValue: 2,
            duration: 500,
            useNativeDriver: true
        }).start((e) => {
            this.setState({
                elevation: !this.state.elevation,
                modal: !this.state.modal
            })
            this.hidemodal.setValue(0)
        })
    }

    setHideModal = () => {
        Animated.timing(this.hidemodal, {
            toValue: 2,
            duration: 500,
            useNativeDriver: true
        }).start((e) => {
            this.setState({
                modal: !this.state.modal,
                elevation: !this.state.elevation
            })
            this.showmodal.setValue(0)
        })
    }

    renderTags = (tags) => {
        return tags.map((tag, index) => {
            return (
                <TouchableOpacity key={index} onPress={(e) => this.removeTags(index)}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff', paddingHorizontal: 10, paddingVertical: 2, paddingBottom: 3,
                        alignSelf: 'flex-start', backgroundColor: '#ea4c89', borderRadius: 4, marginRight: 3}}>{tag}</Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        const showmodalsty = this.showmodal.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [height, -20, 0]
        });
        const hidemodalsty = this.hidemodal.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, -20, height]
        });
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 1.08}}>
                    <DiscussFeed elevation={this.state.elevation} />
                    <View style={{position: 'absolute', width: 45,height: 45, bottom: 20, right: 0, zIndex: 99}}>
                        <TouchableOpacity onPress={(e) => this.setShowModal()} style={{width: '100%', height: '100%', backgroundColor: '#3d72de', borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: this.state.elevation === true ? 10 : 0, borderWidth: .8, borderColor: '#ffffff'}}>
                            <Ionicons name="ios-flame" size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Animated.View style={{width: width, height: height, position: 'absolute', zIndex: 999, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, backgroundColor: 'rgba(255,255,255,.8)', transform: [{translateY: this.state.modal === false ? showmodalsty : hidemodalsty}]}}>
                    <View style={{width: '100%',height: '55%', backgroundColor: '#323a5a', borderRadius: 10, elevation: 20, paddingHorizontal: 15, paddingVertical: 10, marginTop: height / 14}}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <View style={{width: '70%', height: '100%'}}>
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3, alignSelf: 'flex-start'}}>OPEN DISCUSSION</Text>
                            </View>
                            <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                                <TouchableOpacity onPress={(e) => this.setHideModal()} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                                    <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', width: '100%', marginTop: 10}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingBottom: 3, alignSelf: 'flex-start'}}>TITTLE</Text>
                            <TextInput placeholder="type string here.." placeholderTextColor="#ff90bb"
                                style={{width: '100%', height: 40, backgroundColor: '#3e4669', borderRadius: 6, borderWidth: 1, borderColor: '#333a56',
                                fontSize: 14, color: '#ffffff', fontFamily: 'SourceSansPro-SemiBold', paddingHorizontal: 10, marginBottom: 10}} />
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingBottom: 3, alignSelf: 'flex-start'}}>URL</Text>
                            <TextInput placeholder="http://" placeholderTextColor="#ff90bb" autoCapitalize="none"
                                style={{width: '100%', height: 40, backgroundColor: '#3e4669', borderRadius: 6, borderWidth: 1, borderColor: '#333a56',
                                fontSize: 14, color: '#ff90bb', fontFamily: 'SourceSansPro-SemiBold', paddingHorizontal: 10, marginBottom: 10}} />
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingBottom: 3, alignSelf: 'flex-start'}}>TAGS</Text>
                            <View style={{width: '100%', height: 80, backgroundColor: '#3e4669', marginBottom: 10, borderRadius: 6, padding: 2.5, flexDirection: 'row'}}>
                                {this.renderTags(this.state.tags)}
                                <TextInput onChangeText={(tag) => this.setState({tag})} onKeyPress={(e) => this.setTags(this.state.tag, e.nativeEvent.key)} 
                                    value={this.state.tag} placeholder="tags.." placeholderTextColor="#ff90bb" autoCapitalize="none"
                                    style={{width: '40%', height: 20, paddingHorizontal: 5, paddingVertical: 0, fontSize: 14, color: '#ff90bb', fontFamily: 'SourceSansPro-SemiBold',}}/>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '100%', height: 40, backgroundColor: '#3d72de', borderRadius: 6, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff'}}>SHARE DISCUSSION</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        )
    }
}

export default Discuss;