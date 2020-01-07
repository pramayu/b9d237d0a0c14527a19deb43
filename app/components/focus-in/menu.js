import React from 'react';
import {
    View, Text, Dimensions,
    TouchableOpacity, Image,
    ScrollView, Animated
} from 'react-native';
import Ionicons   from 'react-native-vector-icons/Ionicons';
import FeedFocusIn from './feed';

const {width, height} = Dimensions.get('window');
const showbutton = new Animated.Value(0);
const hidebutton = new Animated.Value(0);

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
    })
    return (
        <View style={{width: '100%', height: '100%'}}>
            <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={false} scrollEventThrottle={8}
                onScroll={(e) => setonScroll(e, props)}
                style={{width: '100%', height: '100%', flex: 1, }}>
                <FeedFocusIn />
            </ScrollView>
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? hidebluebtn : showbluebtn}]}}>
                <TouchableOpacity style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#3d72de', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-flame" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{position: 'absolute', zIndex: 99, bottom: 40, right: 0, height: 45, width: 45, transform: [{translateX: props.scroll === false ? showpinkbtn : hidepinkbtn}]}}>
                <TouchableOpacity style={{width: '100%', height: '100%', borderRadius: 100, elevation: 10, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#ea4c89', borderWidth: 1, borderColor: '#ffffff'}}>
                    <Ionicons name="ios-barcode" size={22} color="#ffffff" />
                </TouchableOpacity>
            </Animated.View>
        </View>
        
    )
}

export default FocusInMenu;