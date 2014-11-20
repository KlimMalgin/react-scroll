/** @jsx React.DOM*/
/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var ScrollActions = require('./ScrollActions');

var ContentContainer = require('./ContentContainer');

var NativeScrollContainer = React.createClass({

    propTypes: {
        children: pt.renderable.isRequired
    },

    handleScroll: function () {
        ScrollActions.verticalScroll(this.getDOMNode().scrollTop);
    },

    render: function () {
        return (
            <div className="rs-native-scroll" onScroll={this.handleScroll}>
                <ContentContainer>{this.props.children}</ContentContainer>
            </div>
        );
    }
});

module.exports = NativeScrollContainer;