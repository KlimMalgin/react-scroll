/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var NativeScrollContainer = require('./NativeScrollContainer');

var VerticalScrollBar = require('./VerticalScrollBar');

var Container = React.createClass({displayName: 'Container',

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
            React.DOM.div({className: "rs-base-container"}, 
                NativeScrollContainer(null, this.props.children), 
                VerticalScrollBar({visible: this.state.vScrollShow})
            )
        );
    }
});

module.exports = Container;