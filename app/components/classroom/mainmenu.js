import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const MainMenu = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderWidth: 0, borderColor: '#2b3350'}}>
                <TouchableOpacity onPress={(e) => props.goToBooks()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="book-open" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>BOOKS</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2b3350', borderBottomWidth: 0, borderTopWidth: 0}}>
                <TouchableOpacity onPress={(e) => props.goToSchedule()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="calendar" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>SCHEDULE</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderWidth: 0, borderColor: '#2b3350'}}>
                <TouchableOpacity onPress={(e) => props.goToTask()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="pencil" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>TASK</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: '#2b3350'}}>
                <TouchableOpacity onPress={(e) => props.goToReport()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="notebook" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>REPORT</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2b3350', borderBottomWidth: 0}}>
                <TouchableOpacity onPress={(e) => props.goToQuiz()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="badge" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>QUIZ</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: '#2b3350'}}>
                <TouchableOpacity onPress={(e) => props.goToDiscuss()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="bubbles" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>DISCUSS</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: '#2b3350'}}>
                <TouchableOpacity onPress={(e) => props.goToAudiobook()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="earphones" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>AUDIOBOOK</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2b3350', borderBottomWidth: 0}}>
                <TouchableOpacity onPress={(e) => props.goToCounseling()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="bubble" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>COUNSELING</Text>
            </View>
            <View style={{width: '33%', height: '25%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderColor: '#2b3350'}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleLineIcons name="user" size={20} color="#fbe610" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fbe610'}}>TEACHER</Text>
            </View>
        </View>
    )
}

export default MainMenu;