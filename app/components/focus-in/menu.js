import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity, Image,
    ScrollView, Animated, TextInput
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import FeedFocusIn from './feed';

const {width, height} = Dimensions.get('window');
const showbutton = new Animated.Value(0);
const hidebutton = new Animated.Value(0);
const showmodale = new Animated.Value(0);
const hidemodale = new Animated.Value(0);
const modalopity = new Animated.Value(0);

const setshowbutton = (props) => {
    Animated.timing(showbutton, {
        toValue: 1,
        duration: 150,
        delay: 30,
        useNativeDriver: true
    }).start((e) => {
        props.setScrollAnimated(true)
        hidebutton.setValue(0)
    })
}

const sethidebutton = (props) => {
    Animated.timing(hidebutton, {
        toValue: 1,
        duration: 150,
        delay: 30,
        useNativeDriver: true
    }).start((e) => {
        props.setScrollAnimated(false)
        showbutton.setValue(0)
    })
}

const setonScroll = (e, props) => {
    if(e.nativeEvent.contentOffset.y > 50) {
        setshowbutton(props)
    } else {
        sethidebutton(props)
    }
}

const setShowModale = (props) => {
    props.setActionButton('add', false);
    Animated.parallel([
        Animated.timing(modalopity, {
            toValue: 1,
            duration: 200,
            delay: 120,
            useNativeDriver: true
        }),
        Animated.timing(showmodale, {
            toValue: 2,
            duration: 400,
            useNativeDriver: true
        })
    ]).start((e) => {
        props.setActionButton('add', true)
        hidemodale.setValue(0);
    })
}

const setHideModale = (props) => {
    props.setActionButton('filter', true);
    Animated.parallel([
        Animated.timing(hidemodale, {
            toValue: 2,
            duration: 400,
            useNativeDriver: true
        }),
        Animated.timing(modalopity, {
            toValue: 0,
            duration: 200,
            delay: 280,
            useNativeDriver: true
        })
    ]).start((e) => {
        props.setActionButton('add', false)
        showmodale.setValue(0);
    })
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

const FocusInMenu = (props) => {
    const showpinkbtn = showbutton.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 0]
    });
    const showbluebtn = hidebutton.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 0]
    });
    const hidepinkbtn = hidebutton.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80]
    });
    const hidebluebtn = showbutton.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80]
    });
    const showmdle = showmodale.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [height, -10, 0]
    });
    const hidemdle = hidemodale.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, -10, height]
    });
    return (
        <View style={{width: '100%', height: '100%'}}>
            <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={false} scrollEventThrottle={8}
                onScroll={(e) => setonScroll(e, props)}
                style={{width: '100%', height: '100%', flex: 1, }}>
                <FeedFocusIn />
            </ScrollView>
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? hidebluebtn : showbluebtn}]}}>
                <TouchableOpacity onPress={(e) => setShowModale(props)} style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-flame" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? showpinkbtn : hidepinkbtn}]}}>
                <TouchableOpacity onPress={(e) => props.setActionButton('filter')} style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#ea4c89', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-barcode" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 9999, justifyContent: 'flex-start', opacity: modalopity, transform: [{translateY: props.modals === false ? showmdle : hidemdle}],
                alignItems: 'center', backgroundColor: 'rgba(255,255,255,.8)'}}>
                <View style={{width: '100%', height: height / 1.3, backgroundColor: '#364161', borderRadius: 10, elevation: 10,
                     paddingHorizontal: 15, paddingVertical: 10}}>
                    <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
                        <View style={{width: '70%', height: '100%'}}>
                            <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>LETS SHARE YOUR EXPERIENCE</Text>
                        </View>
                        <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={(e) => setHideModale(props)} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                                <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                        style={{width: '100%', height: 90, borderRadius: 6, fontFamily: 'Brandon_Medium', paddingHorizontal: 10, borderWidth: .5, borderColor: '#2e3853',
                        fontSize: 15, color: '#ffffff', backgroundColor: '#455176', marginTop: 5, textAlignVertical: 'top'}} />
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
                    <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, backgroundColor: '#6298ff',
                        position: 'absolute', bottom: 15, left: 15, elevation: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff'}}>SHARE</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
        
    )
}

export default FocusInMenu;