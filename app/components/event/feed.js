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
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 15, color: '#444'}}>Lomba Desain Logo Berhadiah..</Text>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fff', backgroundColor: '#3b6fd6', alignSelf: 'flex-end', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 4}}>Active</Text>
                        </View>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>We will be changing the name of our team to Monkey Business Fishing Team..</Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="briefcase" size={16} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Tokopedia Official</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="event" size={15} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Jan, 27/2020 - Feb, 02/2020</Text>
                        </View>
                    </View>
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
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 15, color: '#444'}}>Rotary Yoneyama Scholarship..</Text>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fff', backgroundColor: '#444', alignSelf: 'flex-end', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 4}}>Closed</Text>
                        </View>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>Rotary Yoneyama Scholarship diberikan bagi mahasiswa yang berasal dari luar Jepang..</Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="briefcase" size={16} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Rotary Yoneyama</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="event" size={15} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Sept, 01/2019 - Dec, 15/2019</Text>
                        </View>
                    </View>
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
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 15, color: '#444'}}>Business Group Seminar..</Text>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', backgroundColor: '#f1f1f1', alignSelf: 'flex-end', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 4}}>Soon</Text>
                        </View>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>"Guilt Free Selling" with Special Guest David Herbert David Herbert is now..</Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="briefcase" size={16} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>ICC Bali</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="event" size={15} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Feb, 12/2020</Text>
                        </View>
                    </View>
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
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '70%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 15, color: '#444'}}>Seminyak Presents Eelke Klein.</Text>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#fff', backgroundColor: '#3b6fd6', alignSelf: 'flex-end', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 4}}>Active</Text>
                        </View>
                    </View>
                    <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#444', marginTop: 5, lineHeight: 22}}>Eelke Kleijn is a rare talent. With work stretching across movie trailer scores, deep live shows..</Text>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="briefcase" size={16} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Woobar Bali</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <View style={{width: '10%'}}>
                            <SimpleLineIcons name="event" size={15} color="#7f8082" />
                        </View>
                        <View style={{width: '90%'}}>
                            <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#7f8082'}}>Feb, 08/2020 - Feb, 09/2020</Text>
                        </View>
                    </View>
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