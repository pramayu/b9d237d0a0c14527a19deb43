import React, {Component} from 'react';
import {
    View, Text, StatusBar,
    Dimensions
} from 'react-native';
import { style }  from '../../../styles/sty';
import BeforeChoose from '../../../components/focus-in/before';
import AfterChoose from '../../../components/focus-in/after';

const {height} = Dimensions.get('window');

class FocusIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            scroll: false,
            modals: false,
            actionbutton: 'add'
        },
        this.setStatusAnimated = this.setStatusAnimated.bind(this)
        this.setScrollAnimated = this.setScrollAnimated.bind(this)
        this.setActionButton = this.setActionButton.bind(this)
    }

    setStatusAnimated = (status) => {
        this.setState({
            status
        })
    }

    setScrollAnimated = (scroll) => {
        this.setState({
            scroll
        })
    }

    setActionButton = (actionbutton, modals) => {
        this.setState({
            actionbutton,
            modals
        })
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                {/*<BeforeChoose /> */}
                <AfterChoose status={this.state.status} scroll={this.state.scroll} modals={this.state.modals}
                    setScrollAnimated={this.setScrollAnimated}
                    setStatusAnimated={this.setStatusAnimated}
                    setActionButton={this.setActionButton} />
            </View>
        )
    }
}

export default FocusIn;