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
    return ['all feed','event','shots','quest'].map((feedtype, index) => {
        return (
            <TouchableOpacity key={index} style={{marginRight: 5, marginTop: 5}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 5,
                paddingTop: 6, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5, borderColor: '#2e3853',}}>{feedtype.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    })
}

const rendeSortBy = (props) => {
    return ['recent','votes', 'resolve'].map((feedtype, index) => {
        return (
            <TouchableOpacity key={index} style={{marginRight: 5, marginTop: 5}}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 5,
                paddingTop: 6, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5, borderColor: '#2e3853',}}>{feedtype.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    })
}

const renderTags = (tags) => {
    return tags.map((tag, index) => {
        return (
            <TouchableOpacity key={index}>
                <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 4, borderWidth: .5, borderColor: '#2e3853',
                    paddingTop: 5, borderRadius: 6, backgroundColor: '#ea4c89', marginVertical: 2, marginHorizontal: 2}}>{tag}</Text>
            </TouchableOpacity>
        )
    })
}

const MdlFilter = (props) => {
    return (
        <View style={{width: '100%'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 5}}>Sort By</Text>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 5, flexWrap: 'wrap'}}>
                {rendeSortBy(props)}
            </View>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 10}}>FeedType</Text>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 5, flexWrap: 'wrap'}}>
                {renderFeedType(props)}
            </View>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#ffffff', marginTop: 10}}>Tags</Text>
            <View style={{width: '100%', height: 100, borderRadius: 6, backgroundColor: '#455176', borderWidth: .5, borderColor: '#2e3853', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 2, paddingVertical: 2}}>
                {
                    props.tags.length > 0 ? renderTags(props.tags) : null
                }
                <TextInput placeholder="filter by tags" placeholderTextColor="#ffffff" value={props.tag} onChangeText={(tag) => props.setFeedTag(tag)} onKeyPress={(e) => setFilterTags(e, props)} autoCapitalize = 'none'
                    style={{width: '50%', height: 28, paddingVertical: 0, paddingHorizontal: 5, fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff'}}/>
            </View>
        </View>
    )
}

export default MdlFilter;