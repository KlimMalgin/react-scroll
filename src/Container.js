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

    render: function () {
        return (
            <div className="rs-base-container">
                <NativeScrollContainer>{this.props.children}</NativeScrollContainer>
                <VerticalScrollBar />
            </div>
        );
    }
});

module.exports = Container;