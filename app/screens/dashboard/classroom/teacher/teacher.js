import React, {Component} from 'react'
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/teachers/header';
import HeadText from '../../../../components/teachers/headtext';
import TeacherList from '../../../../components/teachers/teachers';

const {width, height} = Dimensions.get('window');

class Teachers extends Component {
    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                {/* <View style={{width: '100%', height: height / 16}}>
                    <HeadText />
                </View> */}
                <View style={{width: '100%', height: height / 1.2, marginTop: 10}}>
                    <TeacherList />
                </View>
            </View>
        )
    }
}

export default Teachers;