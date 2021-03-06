import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image, Dimensions
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window')

const ListChat = (props) => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent: 'flex-end', paddingBottom: 60}}>
            <View style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 5, backgroundColor: '#f5f5f5',
                alignSelf: 'center', paddingVertical: 4, paddingHorizontal: 15, borderRadius: 10}}>15 FEB 2020</Text>
            </View>
            <TouchableOpacity onLongPress={(e) => props.setShowEdelRepl()} style={{width: '100%', paddingRight: '25%', alignItems: 'flex-start', marginBottom: 15}}>
                <View>
                    <View style={{flexDirection: 'row', marginBottom: 8}}>
                        <View style={{width: 25, height: 25, backgroundColor: '#ededed', borderRadius: 50, borderWidth: 1, borderColor: '#ffffff'}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover'}}
                                source={{uri: 'https://cdn.dribbble.com/users/1068771/screenshots/8827348/fashion_d.jpg'}} />
                        </View>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#323a5a', alignSelf: 'flex-start',marginTop:5, marginLeft: 5}}>Shotsand</Text>
                    </View>
                    <View style={{alignItems: 'center', flexDirection: 'row', backgroundColor: '#265abf', paddingVertical: 10, paddingTop: 12, paddingHorizontal: 12, borderRadius: 15, borderTopLeftRadius: 5}}>
                        <View style={{width: 35, height: 42, backgroundColor: '#e8eaee', borderRadius: 8, borderTopLeftRadius: 3, borderBottomRightRadius: 3, justifyContent: 'center', paddingRight: 5}}>
                            <Text style={{paddingHorizontal: 5, paddingVertical: 2, backgroundColor: '#f15642', fontFamily: 'Brandon_Bold',
                            fontSize: 9, borderTopRightRadius: 4, color: '#fff', borderBottomRightRadius: 4}}>PDF</Text>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff', paddingLeft: 10, marginBottom: 2}}>task-management.pdf</Text>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingLeft: 10}}>175KB</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 6, marginRight: 8}}>09:01PM</Text>
                        <Ionicons name="ios-done-all" size={24} color="#265abf" />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingLeft: '25%', marginBottom: 15, alignItems: 'flex-end'}}>
                <Text style={{alignSelf: 'flex-end', paddingVertical: 10, paddingTop: 12, paddingHorizontal: 15, borderRadius: 15, fontFamily: 'Brandon_Regular', fontSize: 16, lineHeight: 19,
                    backgroundColor: '#f5f5f5', color:'#323a5a', borderBottomRightRadius: 2}}>Awesome work! Tasty done!!</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 6, marginRight: 8}}>09:15PM</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingRight: '25%', marginBottom: 15, alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'row', marginBottom: 8}}>
                    <View style={{width: 25, height: 25, backgroundColor: '#ededed', borderRadius: 50, borderWidth: 1, borderColor: '#ffffff'}}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover'}}
                            source={{uri: 'https://cdn.dribbble.com/users/113499/screenshots/6707701/tony.png'}} />
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#323a5a', alignSelf: 'flex-start',marginTop:5, marginLeft: 5}}>Savinazhr</Text>
                </View>
                <Text style={{alignSelf: 'flex-start', paddingVertical: 10, paddingTop: 12, paddingHorizontal: 15, borderRadius: 15, fontFamily: 'Brandon_Regular', fontSize: 16, lineHeight: 19,
                    backgroundColor: '#265abf', color:'#ffffff', borderTopLeftRadius: 5}}>No matter how many times</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 6, marginRight: 8}}>09:23PM</Text>
                    <Ionicons name="ios-done-all" size={24} color="#265abf" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingRight: '25%', marginBottom: 15, alignItems: 'flex-start'}}>
                <View style={{flexDirection: 'row', marginBottom: 8}}>
                    <View style={{width: 25, height: 25, backgroundColor: '#ededed', borderRadius: 50, borderWidth: 1, borderColor: '#ffffff'}}>
                        <Image style={{width: '100%', height: '100%', borderRadius: 50, resizeMode: 'cover'}}
                            source={{uri: 'https://cdn.dribbble.com/users/210795/screenshots/4804527/easy-dribb.png'}} />
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#323a5a', alignSelf: 'flex-start',marginTop:5, marginLeft: 5}}>Huinka</Text>
                </View>
                <View style={{width: width / 2.8, height: width / 2.8, borderRadius: 15, backgroundColor: '#265abf', borderTopLeftRadius: 5}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 15, resizeMode: 'cover', borderTopLeftRadius: 5}}
                    source={{uri: 'https://cdn.dribbble.com/users/210795/screenshots/3376818/pinkish-dribb.png'}} />
                    <View style={{width: '100%', height: '100%', position: 'absolute', borderRadius: 15, borderTopLeftRadius: 5, backgroundColor: 'rgba(0,0,0,.07)'}}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#323a5a', fontSize: 12, fontFamily: 'Brandon_Medium', marginTop: 6, marginRight: 8}}>09:23PM</Text>
                    <Ionicons name="ios-done-all" size={24} color="#265abf" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ListChat;