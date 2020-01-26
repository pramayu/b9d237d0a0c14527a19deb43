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
            feedtype: 'event',
            tags: [],
            tag: ''
        },
        this.setStatusAnimated = this.setStatusAnimated.bind(this);
        this.setScrollAnimated = this.setScrollAnimated.bind(this);
        this.setActionButton = this.setActionButton.bind(this);
        this.setRemoveTag = this.setRemoveTag.bind(this);
        this.setFeedType = this.setFeedType.bind(this);
        this.setFeedTags = this.setFeedTags.bind(this);
        this.setFeedTag = this.setFeedTag.bind(this);
    };

    setStatusAnimated = (status) => {
        this.setState({
            status
        });
    };

    setScrollAnimated = (scroll) => {
        this.setState({
            scroll
        });
    };

    setActionButton = (actionbutton, modals) => {
        this.setState({
            actionbutton,
            modals
        });
    };

    setFeedType = (feedtype) => {
        this.setState({
            feedtype
        });
    };

    setFeedTag = (tag) => {
        let reg = tag.replace(/[^a-zA-Z ]/g, "")
        this.setState({
            tag: reg
        })
    }

    setFeedTags = () => {
        const xvalue = this.state.tags.filter((tag) => tag === this.state.tag)
        if(xvalue.length === 0) {
            this.setState({
                tags: [...this.state.tags, this.state.tag],
                tag: ''
            });
        }
    };

    setRemoveTag = (index) => {
        this.state.tags.splice(index, 1)
        this.setState({ tags: this.state.tags })
    }

    render() {
        return (
            <View style={[style.container,{paddingHorizontal: 20}]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                {/* <BeforeChoose /> */}
                <AfterChoose status={this.state.status} scroll={this.state.scroll} modals={this.state.modals}
                    actionbutton={this.state.actionbutton} feedtype={this.state.feedtype} tags={this.state.tags} tag={this.state.tag}
                    setScrollAnimated={this.setScrollAnimated}
                    setStatusAnimated={this.setStatusAnimated}
                    setActionButton={this.setActionButton}
                    setFeedType={this.setFeedType}
                    setFeedTags={this.setFeedTags}
                    setFeedTag={this.setFeedTag}
                    setRemoveTag={this.setRemoveTag} />
            </View>
        )
    }
}

export default FocusIn;