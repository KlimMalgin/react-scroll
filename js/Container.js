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

    render: function () {
        return (
            React.createElement("div", {className: "rs-base-container"}, 
                React.createElement(NativeScrollContainer, null, this.props.children), 
                React.createElement(VerticalScrollBar, null)
            )
        );
    }
});

module.exports = Container;