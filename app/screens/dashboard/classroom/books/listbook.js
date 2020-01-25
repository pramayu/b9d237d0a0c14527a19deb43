import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';

import Header from '../../../../components/listbook/header';
import BookContent from '../../../../components/listbook/bookcontent';

const {width, height} = Dimensions.get('window');

class ListBook extends Component {
    render() {
        return (
            <View style={[style.container]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <View style={{width: '100%', height: height / 14, paddingHorizontal: 20}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 1.1}}>
                    <BookContent />
                </View>
            </View>
        )
    }
}

export default ListBook;