import React from 'react';
import { 
    View, Text, Dimensions,
    Image,
    TouchableOpacity
 } from "react-native";
 import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';
 import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const renderBook = (props) => {
    return (
        <View style={{width: '100%', flexDirection: 'row', marginTop: 30, justifyContent: 'space-between'}}>
            <View style={{width: '47%', height: '100%'}}>
                <View style={{width: '100%', height: width / 1.5, backgroundColor: '#fff', borderRadius: 6, elevation: props.elevation === false ? 0 : 10}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: 'cover', borderWidth: .5, borderColor: '#fff'}}
                    source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/19/18/asset/81f20b1ca4f8/sub-buzz-1228-1576780705-9.jpg?downsize=800:*&output-format=auto&output-quality=auto'}} />
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#444', marginTop: 10}}>Late Migrations..</Text>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999', paddingTop: 2}}>Margaret Renkl</Text>
            </View>
            <View style={{width: '47%', height: '100%'}}>
                <View style={{width: '100%', height: width / 1.5, backgroundColor: '#fff', borderRadius: 6, elevation: props.elevation === false ? 0 : 10}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: 'cover', borderWidth: .5, borderColor: '#fff'}}
                    source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/20/20/asset/61cea575276c/sub-buzz-2567-1576873827-1.jpg?crop=981:1463;241,0&downsize=800:*&output-format=auto&output-quality=auto'}} />
                </View>
                <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 14, color: '#444', marginTop: 10}}>Disappearing Earth</Text>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#999', paddingTop: 2}}>Julia Phillips</Text>
            </View>
        </View>
    )
}


 const Categori = (props) => {
     return (
         <View style={{width: '100%', height: '100%', paddingTop: 40}}>
            <View style={{width: width, flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 10, elevation: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#3d72de', borderRadius: 6, borderWidth: .5, borderColor: '#ffffff'}}>LATEST STUDIED</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>MATHEMATIKA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>CHEMISTRY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>PHYSICS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>ENGLISH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>EKONOMI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>BIOLOGI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>B.INDONESIA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>SOSIOLOGI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>GEGRAPHY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>JURUSAN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10, borderRadius: 6, marginBottom: 10}}>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#444', alignSelf: 'flex-start', paddingVertical: 8, paddingBottom: 7,
                    paddingHorizontal: 12, backgroundColor: '#f6f6f4', borderRadius: 6, borderWidth: .5, borderColor: '#f1f1f1'}}>PODCAST</Text>
                </TouchableOpacity>
            </View>
            {renderBook(props)}
            <View style={{width: '100%', height: 60, justifyContent:'center', alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity style={{width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3d72de', elevation: 5, borderWidth: .5, borderColor: '#ffffff'}}>
                    <SimpleLineIcons name="mouse" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
         </View>
     )
 }

 export default Categori;