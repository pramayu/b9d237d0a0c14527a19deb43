import React, { Component } from 'react';
import {
    View, Text, StatusBar,
    TouchableOpacity, Dimensions,
    Image
} from 'react-native';
import { style } from '../../styles/sty';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/discoverclass/header';
import SetGrade from '../../components/discoverclass/setgrade';
import HomeTeacher from '../../components/discoverclass/sethometeacher';

const {width, height} = Dimensions.get('window');

class Discoverclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grade   : ''
        },
        this.setHandleGrade = this.setHandleGrade.bind(this)
    }

    setHandleGrade = (grade) => {
        this.setState({
            grade
        })
    }

    renderGrade = () => {
        const grades = [10, 11, 12]
        return grades.map((grade, index) => {
            return <SetGrade key={index} grade={this.state.grade} number={grade} setHandleGrade={this.setHandleGrade}/>
        })
    }

    render() {
        return (
            <View style={[style.container, {paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
                <Header />
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
                    <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 32, color: '#444', marginTop: 10}}>Find Classroom</Text>
                <View style={{paddingRight: '40%'}}>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>Discover various kinds of knowledge and improve your self.</Text>
                </View>
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', marginTop: 40, marginBottom: 10}}>GRADE</Text>
                <View style={{flexDirection: 'row', width: '100%', height: 35, justifyContent: 'space-between'}}>
                    { this.renderGrade() }
                </View>
                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#444', marginTop: 40, marginBottom: 10}}>HOMEROOM TEACHER</Text>
                <View style={{flexDirection: 'row', paddingTop: 10, width: '100%'}}>
                    <View style={{width: '55%', height: width / 2, backgroundColor: '#3951b4', borderRadius: 4, borderColor: '#304497', borderWidth: 1, alignItems: 'center', marginRight: 20, elevation: 40}}>
                        <View style={{width: '100%', height: 30, flexDirection: 'row', paddingHorizontal: 10}}></View>
                        <View style={{width: width / 5, height: width / 5}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100, borderWidth: 1, borderColor: '#ffffff'}}
                            source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/8142218/media/67e2dc70cb7dcb34200db687ee0ca60a.jpg'}}/>
                        </View>
                        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, marginTop: 10, color: '#ffffff'}}>Ms.Erika Karata</Text>
                        <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, marginTop: 5, color: '#ffffff'}}>Biologist Expert</Text>
                    </View>
                    <View style={{width: '55%', height: width / 2, backgroundColor: '#f9f9f9', borderRadius: 4, alignItems: 'center', marginRight: 20, borderColor: '#f3f3f3', borderWidth: 1}}>
                        <View style={{width: '100%', height: 30, flexDirection: 'row', paddingHorizontal: 10}}></View>
                        <View style={{width: width / 5, height: width / 5}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100, borderWidth: 1, borderColor: '#ffffff'}}
                            source={{uri: 'https://cdn.dribbble.com/users/642793/screenshots/7825197/media/a89e4a59e1c90fa4828695398a999770.jpg'}}/>
                        </View>
                        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, marginTop: 10, color: '#444'}}>Ms.Ameri Ichinose</Text>
                        <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, marginTop: 5, color: '#7f8082'}}>Chemistry Expert</Text>
                    </View>
                </View>
                <View style={{width: '100%', marginTop: 50, alignItems: 'center'}}>
                    <TouchableOpacity style={{width: '100%', height: 40, backgroundColor: '#48A1BA', borderRadius: 6, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>FINISH</Text>
                        <Ionicons name="ios-arrow-round-forward" size={24} color="#ffffff" style={{marginLeft: 10}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default Discoverclass;