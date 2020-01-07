import React from 'react';
import {
    View, Text, TouchableOpacity,
    Image, Animated, TextInput
} from 'react-native';
import SimpleLineIcons   from 'react-native-vector-icons/SimpleLineIcons';

const hide      = new Animated.Value(0);
const show      = new Animated.Value(0);
const sch1      = new Animated.Value(0);
const sch2      = new Animated.Value(0);

const setHide = (props) => {
    Animated.parallel([
        Animated.timing(hide, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }),
        Animated.timing(sch1, {
            toValue: 1,
            duration: 300,
            delay: 100,
            useNativeDriver: true
        })
    ]).start(() => {
        props.setStatusAnimated(true)
        show.setValue(0)
        sch2.setValue(0)
    })
}

const setShow = (props) => {
    Animated.parallel([
        Animated.timing(show, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }),
        Animated.timing(sch2, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        })
    ]).start(() => {
        props.setStatusAnimated(false)
        hide.setValue(0)
        sch1.setValue(0)
    })
}

const Header = (props) => {
    const interHide = hide.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100]
    });
    const interShow = show.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });
    const interSch1 = sch1.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });
    const interSch2 = sch2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100]
    });
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <View style={{width: '90%'}}>
                <Animated.View style={{flexDirection: 'row', paddingTop: 13, transform: [{translateY: props.status === false ? interHide : interShow}]}}>
                    <SimpleLineIcons name="ghost" size={18} color="#444444" />
                    <Text style={[{color: '#444', fontSize: 12, letterSpacing: 1, paddingTop: 3, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>FOCUS-IN PYTHON</Text>
                </Animated.View>
                <Animated.View style={{flexDirection: 'row', paddingTop: 13, position: 'absolute', transform: [{translateY: props.status === false ? interSch1 : interSch2}]}}>
                    <TextInput placeholder="Search here..." placeholderTextColor="#444"
                        style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, width: '100%', height: 40, borderRadius: 6, backgroundColor: '#f7f7f7', borderWidth: 1, borderColor: '#f1f1f1', paddingHorizontal: 10, color: '#444'}}/>
                </Animated.View>
            </View>
            {/*<View style={{width: '20%', paddingTop: 10, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                   <Text style={{fontFamily: 'Brandon_Medium', fontSize: 10, color: '#ffffff', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 4, backgroundColor: '#3d72de'}}>SAVE</Text>
                </TouchableOpacity>
            </View> */}
            <View style={{width: '10%', paddingTop: 14, alignItems: 'flex-end'}}>
                <TouchableOpacity style={{transform: [{translateY: props.status === false ? interHide : interShow}]}} onPress={(e) => setHide(props)}>
                    <SimpleLineIcons name="magnifier" size={18} color="#444444" />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop: 22, position: 'absolute', transform: [{translateY: props.status === false ? interSch1 : interSch2}]}} onPress={(e) => setShow(props)}>
                    <SimpleLineIcons name="reload" size={18} color="#444444" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;