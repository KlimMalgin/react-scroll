/** @jsx React.DOM*/
/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var ScrollActions = require('./ScrollActions');

var ContentContainer = require('./ContentContainer');

var Reflux = require('reflux'),
    ListenerMixin = Reflux.ListenerMixin;

var ScrollBarParamStore = require('./stores/ScrollBarParamStore');
var VerticalContentScrollStore = require('./stores/VerticalContentScrollStore');

var ScrollListenerMixin = require('./utils/ScrollListenerMixin');

var NativeScrollContainer = React.createClass({displayName: 'NativeScrollContainer',

    mixins: [
        ListenerMixin,
        ScrollListenerMixin,
        Reflux.connect(ScrollBarParamStore),
        Reflux.connect(VerticalContentScrollStore, 'offsetContent'),
        Reflux.listenTo(ScrollActions.activateScrollListener, 'onActivateScrollListener')
    ],

    propTypes: {
        children: pt.renderable.isRequired
    },

    componentDidMount: function () {
        this.onActivateScrollListener();
    },

    componentDidUpdate: function () {
        this.getDOMNode().scrollTop = this.state.offsetContent;
    },

    onActivateScrollListener: function () {
        this.onScroll(this.getDOMNode(), this.handleScroll);
    },

    handleScroll: function () {
        var offset = Math.ceil(this.getDOMNode().scrollTop * this.state.onePercentValue);
        ScrollActions.verticalScroll(offset);
    },

    render: function () {
        return (
            React.createElement("div", {className: "rs-native-scroll"}, 
                React.createElement(ContentContainer, null, this.props.children)
            )
        );
    }
});

module.exports = NativeScrollContainer;