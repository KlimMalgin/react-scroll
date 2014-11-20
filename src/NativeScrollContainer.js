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

var NativeScrollContainer = React.createClass({

    mixins: [
        ListenerMixin,
        Reflux.connect(ScrollBarParamStore)
    ],

    propTypes: {
        children: pt.renderable.isRequired
    },

    handleScroll: function () {
        var offset = Math.ceil(this.getDOMNode().scrollTop * this.state.onePercentValue);

        console.log("scrollTop: ", this.getDOMNode(), this.getDOMNode().scrollTop);
        ScrollActions.verticalScroll(offset);
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