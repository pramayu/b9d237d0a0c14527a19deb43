import React from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width, height}  = Dimensions.get('window');

const History = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={{width: '8%'}}>
                    <SimpleLineIcons name="puzzle" size={16} color="#444" />
                </View>
                <View style={{width: '72%'}}>
                    <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444'}}>LATEST STUDIED</Text>
                </View>
                <View style={{width: '20%', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: '100%', height: 24, justifyContent:'flex-start', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444'}}>See More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <LinearGradient colors={['#6754b9','#3d2c88']} style={{width: '100%', height: width / 1.9, borderRadius: 6, elevation: 20, padding: 15}}>
                        <SimpleLineIcons name="calculator" size={20} color="#dcd4ff" />
                        <View style={{marginTop: 30}}>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#dcd4ff'}}>MATH</Text>
                            <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Coordinate Geometry</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#dcd4ff'}}>Thu, Nov 20</Text>
                        </View>
                        <View style={{width: '100%', height: 8, borderRadius: 4, backgroundColor: '#6754b9', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '50%', height: 4, borderRadius: 2, backgroundColor: '#3d2c88'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#dcd4ff', marginTop: 5}}>5 of 10 lessons</Text>
                    </LinearGradient>
                </View>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <LinearGradient colors={['#9fb2ac','#505e5e']} style={{width: '100%', height: width / 1.9, borderRadius: 6, elevation: 20, padding: 15}}>
                        <SimpleLineIcons name="chemistry" size={20} color="#e5fdf5" />
                        <View style={{marginTop: 30}}>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#e5fdf5'}}>CHEMISTRY</Text>
                            <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Quantum Numbers</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#e5fdf5'}}>Thu, Nov 20</Text>
                        </View>
                        <View style={{width: '100%', height: 8, borderRadius: 4, backgroundColor: '#9fb2ac', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '45%', height: 4, borderRadius: 2, backgroundColor: '#505e5e'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#e5fdf5', marginTop: 5}}>7 of 15 lessons</Text>
                    </LinearGradient>
                </View>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <LinearGradient colors={['#f0a168','#c26c55']} style={{width: '100%', height: width / 1.9, borderRadius: 6, elevation: 20, padding: 15}}>
                        <SimpleLineIcons name="energy" size={20} color="#ffebdc" />
                        <View style={{marginTop: 30}}>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#ffebdc'}}>PHYSICS</Text>
                            <Text style={{fontSize: 16, fontFamily: 'PlayfairDisplay-Bold', color: '#fff'}}>Micrometer Screw</Text>
                            <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-Regular', color: '#ffebdc'}}>Thu, Nov 20</Text>
                        </View>
                        <View style={{width: '100%', height: 8, borderRadius: 4, backgroundColor: '#f0a168', marginTop: 15, justifyContent: 'center', paddingHorizontal: 2}}>
                            <View style={{width: '70%', height: 4, borderRadius: 2, backgroundColor: '#c26c55'}}></View>
                        </View>
                        <Text style={{fontSize: 12, fontFamily: 'SourceSansPro-SemiBold', color: '#ffebdc', marginTop: 5}}>10 of 17 lessons</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default History;