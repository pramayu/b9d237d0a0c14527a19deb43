import React from 'react';
import {
    View, Text, TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width} = Dimensions.get('window');

const MainMenu = (props) => {
    return (
        <ScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{flexDirection: 'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity onPress={(e) => props.linkToFocusIn()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="ghost" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>FOCUS-ON</Text>
            </View>
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity onPress={(e) => props.linkToEvent()} style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="trophy" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>EVENT</Text>
            </View>
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="bubbles" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>CLASSROOM</Text>
            </View>
            {/* <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="calendar" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>SCHEDULE</Text>
            </View> */}
            {/* <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="notebook" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>REPORT</Text>
            </View> */}
            {/* <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="pencil" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>TASK</Text>
            </View> */}
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="question" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>TUTORIAL</Text>
            </View>
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="briefcase" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>CREATION</Text>
            </View>
            <View style={{width: 70, justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="directions" size={20} color="#cde3e8" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444444', marginTop: 5}}>ROAD MAP</Text>
            </View>
        </ScrollView>
    )
}

export default MainMenu;