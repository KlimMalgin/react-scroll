/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');

var Reflux = require('reflux'),
    ListenerMixin = Reflux.ListenerMixin;

var ScrollBarParamStore = require('./stores/ScrollBarParamStore');

var DocumentListenerMixin = require('./utils/DocumentListenerMixin');

var px = require('./utils/px');

var Toddler = React.createClass({

    mixins: [
        ListenerMixin,
        DocumentListenerMixin,
        Reflux.connect(ScrollBarParamStore)
    ],

    componentDidUpdate: function () {
        var el = this.getDOMNode();
        el.style.top = px(this.props.offset);
        el.style.height = px(this.state.vToggleHeight);
    },

    handlerMouseDown: function () {
        console.log('handlerMouseDown');
        this.onMouseMove(this.handleMouseMove);
        this.onMouseUp(this.handleMouseUp);
    },

    handleMouseMove: function () {
        console.log('onMouseMove: ', arguments);
    },

    handleMouseUp: function () {
        this.offMouseMove();
        this.offMouseUp();
        console.log('onMouseUp: ', arguments);
    },

    render: function () {
        return (<div onMouseDown={this.handlerMouseDown} className="rs-toddler"></div>);
    }

});

module.exports = Toddler;