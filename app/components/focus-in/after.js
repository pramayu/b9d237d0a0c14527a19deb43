import React from 'react';
import {
    View, Text, Dimensions
} from 'react-native';
import Header from './header';
import FocusInMenu from './menu';

const {width, height} = Dimensions.get('window');

const AfterChoose = (props) => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <View style={{width: '100%', height: height / 16}}>
                <Header status={props.status} setStatusAnimated={props.setStatusAnimated} />
            </View>
            <View style={{width: '100%', height: height / 1.1, marginTop: 20}}>
                <FocusInMenu 
                    setActionButton={props.setActionButton}
                    setScrollAnimated={props.setScrollAnimated}
                    setFeedType={props.setFeedType}
                    scroll={props.scroll} modals={props.modals} feedtype={props.feedtype} />
            </View>
        </View>
    )
}

export default AfterChoose;