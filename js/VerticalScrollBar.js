/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');

var Reflux = require('reflux'),
    ListenerMixin = Reflux.ListenerMixin;

var VerticalScrollStore = require('./stores/VerticalScrollStore');

var Toddler = require('./Toddler');

var VerticalScrollBar = React.createClass({displayName: 'VerticalScrollBar',

    mixins: [
        ListenerMixin,
        Reflux.connect(VerticalScrollStore, 'offset')
    ],

    render: function () {
        return (React.createElement("div", {className: "rs-vertical-scroll-bar"}, 
            React.createElement(Toddler, {offset: this.state.offset})
        ));
    }
});

module.exports = VerticalScrollBar;