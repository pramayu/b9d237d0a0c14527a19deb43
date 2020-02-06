import React, {Component} from 'react';
import {
    View, Text, Dimensions, Image, TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const DiscussFeed = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{width: '18%'}}>
                    <View style={{width: 40, height: 40, backgroundColor: '#ffffff', borderRadius: 50, elevation: 10, borderWidth: .5, borderColor: '#ffffff'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50}}
                        source={{uri: 'https://cdn.dribbble.com/users/339280/screenshots/8587625/04_2x.png'}}/>
                    </View>
                </View>
                <View style={{width: '82%', paddingTop: 3}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Darek Berendt <Text style={{color: '#999'}}>open discussion</Text></Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 8}}>
                        <Text style={{alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 3, paddingTop: 2, color: '#ffffff', borderRadius: 10, 
                            backgroundColor: '#3366fd', fontFamily: 'SourceSansPro-SemiBold', marginRight: 5, fontSize: 13}}>startup</Text>
                        <Text style={{alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 3, paddingTop: 2, color: '#ffffff', borderRadius: 10, 
                            backgroundColor: '#3366fd', fontFamily: 'SourceSansPro-SemiBold', marginRight: 5, fontSize: 13}}>techinasia</Text>
                    </View>
                    <View style={{marginTop: 8}}>
                        <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#444', lineHeight: 26}}>Circles.Life Expands to Event Bookings with Sistic Tie-up</Text>
                    </View>
                    <View style={{marginTop: 15, flexDirection: 'row'}}>
                        <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                            <SimpleLineIcons name="heart" size={16} color="#444" />
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', alignSelf: 'flex-start', paddingLeft: 5, paddingRight: 12}}>37</Text>
                        <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                            <SimpleLineIcons name="bubbles" size={17} color="#444" />
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', alignSelf: 'flex-start', paddingLeft: 5, paddingRight: 12}}>54</Text>
                        <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                            <SimpleLineIcons name="folder-alt" size={16} color="#444" />
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', alignSelf: 'flex-start', paddingLeft: 5, paddingRight: 12}}>18</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DiscussFeed;