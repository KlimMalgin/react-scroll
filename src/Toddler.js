/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');

var Reflux = require('reflux'),
    ListenerMixin = Reflux.ListenerMixin;

var ScrollBarParamStore = require('./stores/ScrollBarParamStore');

var px = require('./utils/px');

var Toddler = React.createClass({

    mixins: [
        ListenerMixin,
        Reflux.connect(ScrollBarParamStore)
    ],

    componentDidUpdate: function () {
        var el = this.getDOMNode();
        el.style.top = px(this.props.offset);
        el.style.height = px(this.state.vToggleHeight);
    },

    render: function () {
        return (<div className="rs-toddler"></div>);
    }

});

module.exports = Toddler;