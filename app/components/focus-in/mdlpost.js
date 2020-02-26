import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity, Image,
    ScrollView, Animated, TextInput
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const setFilterTags = (e, props) => {
    if(e.nativeEvent.key === ' ') {
        props.setFeedTags()
        props.setFeedTag('')
    }
}

const renderFeedType = (props) => {
    return ['event','shots','quest'].map((feedtype, index) => {
        return (
            <TouchableOpacity onPress={(e) => props.setFeedType(feedtype)} key={index} style={{marginRight: 5}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 5,
                paddingTop: 6, borderRadius: 6, backgroundColor: props.feedtype === feedtype ? '#ea4c89' : '#455176', borderWidth: .5, borderColor: '#2e3853',}}>{feedtype.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    })
}

const renderTags = (props) => {
    return props.tags.map((tag, index) => {
        return (
            <TouchableOpacity key={index} onPress={(e) => props.setRemoveTag(index)}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 4, borderWidth: .5, borderColor: '#2e3853',
                    paddingTop: 5, borderRadius: 6, backgroundColor: '#ea4c89', marginVertical: 2, marginHorizontal: 2}}>{tag}</Text>
            </TouchableOpacity>
        )
    })
}


const MdlPost = (props) => {
    return (
        <View style={{width: '100%'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 5}}>Choose Feed</Text>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 5}}>
                {renderFeedType(props)}
            </View>
            {
                props.feedtype === 'quest'?
                <View>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 20}}>Title</Text>
                    <TextInput placeholder="type title here" placeholderTextColor="#ffffff"
                    style={{width: '100%', height: 40, borderRadius: 6, fontFamily: 'Brandon_Medium', paddingHorizontal: 10, borderWidth: .5, borderColor: '#2e3853',
                    fontSize: 15, color: '#ffffff', backgroundColor: '#455176', marginTop: 5}} />
                </View> : null
            }
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 20}}>Caption</Text>
            <TextInput placeholder="type caption here" placeholderTextColor="#ffffff"
                style={{width: '100%', height: 80, borderRadius: 6, fontFamily: 'Brandon_Medium', paddingHorizontal: 10, borderWidth: .5, borderColor: '#2e3853',
                fontSize: 15, color: '#ffffff', backgroundColor: '#455176', marginTop: 5, textAlignVertical: 'top'}} />
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 10}}>Tags</Text>
            <View style={{width: '100%', height: 80, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5, borderColor: '#2e3853', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 2, paddingVertical: 2}}>
                {
                    props.tags.length > 0 ? renderTags(props) : null
                }
                <TextInput placeholder="filter by tags" placeholderTextColor="#ffffff" value={props.tag} onChangeText={(tag) => props.setFeedTag(tag)} onKeyPress={(e) => setFilterTags(e, props)} autoCapitalize = 'none'
                    style={{width: '50%', height: 28, paddingVertical: 0, paddingHorizontal: 5, fontFamily: 'Brandon_Medium', fontSize: 16, color: '#ffffff'}}/>
            </View>
            {
                props.feedtype === 'quest'?
                null :
                <>
                    <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 20}}>Share Picture</Text>
                    <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                        <TouchableOpacity style={{width: 70, height: 70, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5,
                            borderColor: '#2e3853', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
                            <Ionicons name="ios-cloud-upload" size={32} color="#ffffff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 70, height: 70, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5,
                            borderColor: '#2e3853', justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: "cover"}}
                                source={{uri: 'https://cdn.dribbble.com/users/452635/screenshots/6480005/195.3.pre_2x.png'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 70, height: 70, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5,
                            borderColor: '#2e3853', justifyContent: 'center', alignItems: 'center', marginRight: 5, elevation: 10}}>
                            <Image style={{width: '100%', height: '100%', borderRadius: 6, resizeMode: "cover"}}
                                source={{uri: 'https://cdn.dribbble.com/users/328251/screenshots/2828040/68.png'}}/>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export default MdlPost;