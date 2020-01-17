import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const MainMenu = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="book-open" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>BOOKS</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="calendar" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>SCHEDULE</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="pencil" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>TASK</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="notebook" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>REPORT</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="badge" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>QUIZ</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="bubbles" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>DISCUSS</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="earphones" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>PODCAST</Text>
            </View>
            <View style={{width: '25%', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity style={{width: 45, height: 45, borderRadius: 10, backgroundColor: '#323a5a', justifyContent: 'center', alignItems: 'center', elevation: 10}}>
                    <SimpleLineIcons name="bubble" size={20} color="#ffcf6d" />
                </TouchableOpacity>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#21263c', marginTop: 5}}>CONSULT</Text>
            </View>
        </View>
    )
}

export default MainMenu;