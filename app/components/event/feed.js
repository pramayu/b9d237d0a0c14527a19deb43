import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const FeedEvent = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 15}}>
                <View style={{width: '18%', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{width: 40, height: 40, backgroundColor: '#323a5a', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleLineIcons name="badge" size={18} color="#cde3e8" />
                    </View>
                </View>
                <View style={{width: '82%', paddingLeft: 5}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Design a Logo for a New Venture...</Text>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>Wir sind ein Bauunternehmen und decken das gesamte Spektrum von Hoch- und Tiefbau ab. Wir können unterstützen unser...</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a', marginTop: 10}}>contest @bukapalak</Text>
                    <View style={{width: '100%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 50, height: 24, justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Ionicons name="ios-arrow-round-forward" size={24} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 15}}>
                <View style={{width: '18%', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{width: 40, height: 40, backgroundColor: '#5c0d7c', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleLineIcons name="graduation" size={18} color="#ffdfe6" />
                    </View>
                </View>
                <View style={{width: '82%', paddingLeft: 5}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>Need to Make a Design for a Team...</Text>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>We will be changing the name of our team to Monkey Business Fishing Team. We have already started branding for....</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a', marginTop: 10}}>scholarship @dribbble</Text>
                    <View style={{width: '100%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 50, height: 24, justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Ionicons name="ios-arrow-round-forward" size={24} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 15}}>
                <View style={{width: '18%', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{width: 40, height: 40, backgroundColor: '#4049bb', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleLineIcons name="notebook" size={18} color="#cfd2ff" />
                    </View>
                </View>
                <View style={{width: '82%', paddingLeft: 5}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>The Next Food Superstar.</Text>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>Our organisation developed a browser-based Software as a Service solution to test IT Disaster Recovery plans on Microsoft Azure...</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a', marginTop: 10}}>seminar @ruangguru</Text>
                    <View style={{width: '100%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 50, height: 24, justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Ionicons name="ios-arrow-round-forward" size={24} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginBottom: 15}}>
                <View style={{width: '18%', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={{width: 40, height: 40, backgroundColor: '#1cbbd1', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleLineIcons name="earphones" size={18} color="#d4faff" />
                    </View>
                </View>
                <View style={{width: '82%', paddingLeft: 5}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#444'}}>A Job Now, More to Come</Text>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>We will deliver courses within lifestyle/weight reduction/traning and also a webshop within nutrition.</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#323a5a', marginTop: 10}}>festival @tokopedia</Text>
                    <View style={{width: '100%', alignItems: 'flex-end'}}>
                        <TouchableOpacity style={{width: 50, height: 24, justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Ionicons name="ios-arrow-round-forward" size={24} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FeedEvent;