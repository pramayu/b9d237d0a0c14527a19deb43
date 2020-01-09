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
            actionbutton: 'add',
            feedtype: 'event'
        },
        this.setStatusAnimated = this.setStatusAnimated.bind(this)
        this.setScrollAnimated = this.setScrollAnimated.bind(this)
        this.setActionButton = this.setActionButton.bind(this)
        this.setFeedType = this.setFeedType.bind(this)
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

    setFeedType = (feedtype) => {
        this.setState({
            feedtype
        })
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                {/*<BeforeChoose /> */}
                <AfterChoose status={this.state.status} scroll={this.state.scroll} modals={this.state.modals} feedtype={this.state.feedtype}
                    setScrollAnimated={this.setScrollAnimated}
                    setStatusAnimated={this.setStatusAnimated}
                    setActionButton={this.setActionButton}
                    setFeedType={this.setFeedType} />
            </View>
        )
    }
}

export default FocusIn;