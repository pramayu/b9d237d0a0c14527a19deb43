import React from 'react';
import {
    View, Text, Dimensions,
    Image
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ListGroup = (props) => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
            <View style={{width: '100%', height: 65, flexDirection: 'row', marginBottom: 5}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/60266/screenshots/6935254/sm_herman_basket_shot_1_2x.jpg'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 16, color: '#323a5a', marginBottom: 2}}>Basket Team</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#3d72de', alignSelf: 'flex-start', lineHeight: 24}}>オレン:</Text>
                        <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#323a5a', alignSelf: 'flex-start', paddingLeft: 5}}>I fell inlove with this song..</Text>
                    </View>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#323a5a'}}>07:21PM</Text>
                    <View style={{marginTop: 5, width: 24, height: 24, backgroundColor: '#ea4c89', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 8, elevation: props.elevation, borderWidth: .5, borderColor: '#fff'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff'}}>5</Text>
                    </View>
                </View>
            </View>
            <View style={{width: '100%', height: 65, flexDirection: 'row', marginBottom: 5}}>
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#ededed'}}>
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius:100}}
                            source={{uri: 'https://cdn.dribbble.com/users/788099/screenshots/3528742/gang_kit8-net.png'}} />
                    </View>
                </View>
                <View style={{width: '60%', height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 16, color: '#323a5a', marginBottom: 2}}>GangOrca</Text>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#3d72de', alignSelf: 'flex-start', lineHeight: 24}}>Ghiffar:</Text>
                        <Text style={{fontFamily: 'Brandon_Regular', fontSize: 16, color: '#323a5a', alignSelf: 'flex-start', paddingLeft: 5}}>Really Impressive. Great..</Text>
                    </View>
                </View>
                <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#323a5a'}}>07:21PM</Text>
                </View>
            </View>
        </View>
    )
}

export default ListGroup;