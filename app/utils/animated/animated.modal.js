import React from 'react';
import {
    Animated
} from 'react-native';


export var showModal = (showmodale, hidemodale) => {
    Animated.timing(showmodale, {
        toValue: 2,
        duration: 400,
        useNativeDriver: true
    }).start((e) => {
        hidemodale.setValue(0);
    })
}

export var hideModal = (showmodale, hidemodale) => {
    Animated.timing(hidemodale, {
        toValue: 2,
        duration: 400,
        useNativeDriver: true
    }).start((e) => {
        showmodale.setValue(0);
    })
}