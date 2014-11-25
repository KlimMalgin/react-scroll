/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var NativeScrollContainer = require('./NativeScrollContainer');

var VerticalScrollBar = require('./VerticalScrollBar');

var Container = React.createClass({

    propTypes: {
        children: pt.renderable.isRequired
    },

    getInitialState: function () {
        return {
            vScrollShow: false,
            hScrollShow: false
        };
    },

    componentDidMount: function () {
        this.handleChangeContent();
    },

    componentDidUpdate: function () {
        this.handleChangeContent();
    },

    handleChangeContent: function () {
        var el = this.getDOMNode(),
            scrollCnt = el.getElementsByClassName('rs-native-scroll')[0],
            contentCnt = el.getElementsByClassName('rs-content')[0];

        console.info('handleChangeContent');

        if (contentCnt.clientHeight <= scrollCnt.clientHeight && this.state.vScrollShow) {
            this.setState({
                vScrollShow: false
            });
        } else if (contentCnt.clientHeight > scrollCnt.clientHeight && !this.state.vScrollShow) {
            this.setState({
                vScrollShow: true
            });
        }
    },

    render: function () {
        return (
            <div className="rs-base-container">
                <NativeScrollContainer>{this.props.children}</NativeScrollContainer>
                <VerticalScrollBar visible={this.state.vScrollShow} />
            </div>
        );
    }
});

module.exports = Container;