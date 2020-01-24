import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../../styles/sty';
import Header from '../../../../components/books/header';
import HeadText from '../../../../components/books/headtext';
import Categori from '../../../../components/books/categori';

const {width, height} = Dimensions.get('window');

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        },
        this.setChangeSearch = this.setChangeSearch.bind(this)
    }

    setChangeSearch = (search) => {
        this.setState({
            search
        })
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <View style={{width: '100%', height: height / 14}}>
                    <Header />
                </View>
                <View style={{width: '100%', height: height / 4}}>
                    <HeadText search={this.state.search} setChangeSearch={this.setChangeSearch} />
                </View>
                <View style={{width: '100%', height: height / 1.55}}>
                    <Categori />
                </View>
            </View>
        )
    }
}

export default Books;