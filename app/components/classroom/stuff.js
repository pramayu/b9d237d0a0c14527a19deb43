import React from 'react';
import {
    View, Text, TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const FreeStuff = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={{width: '8%'}}>
                    <SimpleLineIcons name="grid" size={15} color="#444" />
                </View>
                <View style={{width: '72%'}}>
                    <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444'}}>STUFF WEREHOUSE</Text>
                </View>
                <View style={{width: '20%', alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{width: '100%', height: 24, justifyContent:'flex-start', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 12, fontFamily: 'Brandon_Medium', color: '#444'}}>See More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <View style={{width: width / 3, height: width / 2, backgroundColor: '#fff', borderRadius: 6, elevation: props.elevation === false ? 0 : 10}}>
                        <Image style={{width: '100%', height: '100%', borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius:2, borderBottomLeftRadius:2, resizeMode: 'cover', borderWidth: .5, borderColor: '#fff'}}
                        source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/19/18/asset/81f20b1ca4f8/sub-buzz-1228-1576780705-9.jpg?downsize=800:*&output-format=auto&output-quality=auto'}} />
                    </View>
                    <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#444', marginTop: 10}}>Late Migrations..</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999', paddingTop: 2}}>Margaret Renkl</Text>
                </View>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <View style={{width: width / 3, height: width / 2, backgroundColor: '#fff', borderRadius: 6, elevation: props.elevation === false ? 0 : 10}}>
                        <Image style={{width: '100%', height: '100%', borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius:2, borderBottomLeftRadius:2, resizeMode: 'cover', borderWidth: .5, borderColor: '#fff'}}
                        source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/20/20/asset/61cea575276c/sub-buzz-2567-1576873827-1.jpg?crop=981:1463;241,0&downsize=800:*&output-format=auto&output-quality=auto'}} />
                    </View>
                    <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#444', marginTop: 10}}>Disappearing Earth</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999', paddingTop: 2}}>Julia Phillips</Text>
                </View>
                <View style={{width: width / 3, height: '100%', marginRight: 20}}>
                    <View style={{width: width / 3, height: width / 2, backgroundColor: '#fff', borderRadius: 6, elevation: props.elevation === false ? 0 : 10}}>
                        <Image style={{width: '100%', height: '100%', borderTopRightRadius: 6, borderBottomRightRadius: 6, borderTopLeftRadius:2, borderBottomLeftRadius:2, resizeMode: 'cover', borderWidth: .5, borderColor: '#fff'}}
                        source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/19/18/asset/6a40bc4514fb/sub-buzz-1197-1576781935-18.jpg?downsize=800:*&output-format=auto&output-quality=auto'}} />
                    </View>
                    <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#444', marginTop: 10}}>The Tradition</Text>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999', paddingTop: 2}}>Jericho Brown</Text>
                </View>
            </View>
        </View>
    )
}

export default FreeStuff;