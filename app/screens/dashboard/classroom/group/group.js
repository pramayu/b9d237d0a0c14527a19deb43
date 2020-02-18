import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions, Animated,
    TouchableOpacity
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
            elevation: 8
        }
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width:'100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width:'100%', height: height / 1.1, paddingTop: 20}}>
                    <ListGroup />
                </View>
                <View style={{width: 45, height: 45, position: 'absolute', borderRadius: 100, bottom: 20, right: 20, elevation: this.state.elevation, backgroundColor: '#ededed', zIndex: 99}}>
                    <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', borderRadius: 100, alignItems: 'center', backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#fff'}}>
                        <SimpleLineIcons name="energy" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Group;