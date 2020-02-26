import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity, Image,
    ScrollView, Animated, TextInput,
    Keyboard
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import FeedFocusIn from './feed';
import MdlPost from './mdlpost';
import MdlFilter from './mdlfilter';

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

const setShowModale = (action, props) => {
    props.setActionButton(action, false)
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
        props.setActionButton(action, true)
        hidemodale.setValue(0);
    })
}

const setHideModale = (props) => {
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
        Keyboard.dismiss();
        props.setActionButton('add', false)
        showmodale.setValue(0);
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
            {/* start feed */}
            <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={false} scrollEventThrottle={8}
                onScroll={(e) => setonScroll(e, props)}
                style={{width: '100%', height: '100%', flex: 1, }}>
                <FeedFocusIn />
            </ScrollView>
            {/* end feed */}
            {/* start blue button */}
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? hidebluebtn : showbluebtn}]}}>
                <TouchableOpacity onPress={(e) => {
                    setShowModale('add',props)
                }} style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-flame" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
            {/* end blue button */}
            {/* start pink button */}
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? showpinkbtn : hidepinkbtn}]}}>
                <TouchableOpacity onPress={(e) => {
                    setShowModale('filter',props)
                }} style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#ea4c89', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-barcode" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
            {/* end pink button */}
            {/* modal */}
            <Animated.View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 9999, justifyContent: 'flex-start', opacity: modalopity, transform: [{translateY: props.modals === false ? showmdle : hidemdle}], alignItems: 'center', backgroundColor: 'rgba(255,255,255,.8)'}}>
                {/* modal content */}
                <View style={{width: '100%', height: props.actionbutton === 'add' ? height / 1.3 : height / 1.95, backgroundColor: '#364161', borderRadius: 10, elevation: 10, paddingHorizontal: 15, paddingVertical: 10}}>
                    <View style={{width: '100%', height: 24, flexDirection: 'row'}}>
                        <View style={{width: '70%', height: '100%'}}>
                            {
                                props.actionbutton === 'add' ?
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>LETS SHARE YOUR EXPERIENCE</Text>
                                :
                                <Text style={{fontFamily: 'Brandon_Medium', fontSize: 12, color: '#ffffff', paddingTop: 3}}>FILTER FEED</Text>
                            }
                        </View>
                        <View style={{width: '30%', height: '100%', alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={(e) => setHideModale(props)} style={{width: 24, height: 24, alignItems: 'flex-end', justifyContent: "flex-start"}}>
                                <Ionicons name="ios-backspace" size={20} color="#ffffff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        props.actionbutton === 'add' ? 
                        <MdlPost setFeedType={props.setFeedType} feedtype={props.feedtype}  setRemoveTag={props.setRemoveTag} setFeedTags={props.setFeedTags} tags={props.tags} setFeedTag={props.setFeedTag} tag={props.tag} /> :
                        <MdlFilter setRemoveTag={props.setRemoveTag} setFeedTags={props.setFeedTags} tags={props.tags} setFeedTag={props.setFeedTag} tag={props.tag} />
                    }
                    {
                        props.actionbutton === 'add' ?
                        <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, backgroundColor: '#6298ff',
                            position: 'absolute', bottom: 15, left: 15, elevation: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff'}}>SHARE</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, backgroundColor: '#6298ff',
                            position: 'absolute', bottom: 15, left: 15, elevation: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 14, color: '#ffffff'}}>FILTER</Text>
                        </TouchableOpacity>
                    }
                    
                </View>
            </Animated.View>
        </View>
        
    )
}

export default FocusInMenu;