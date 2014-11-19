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

var VerticalScrollBar = React.createClass({

    mixins: [
        ListenerMixin,
        Reflux.connect(VerticalScrollStore, 'offset')
    ],

    componentDidMount: function () {
        var parent = this._owner.getDOMNode(),
            cmp = this.getDOMNode();

        cmp.style.height = parent.clientHeight + "px";
    },

    render: function () {
        console.log(this.state.offset);
        return (<div className="rs-vertical-scroll-bar">
            <Toddler />
        </div>);
    }
});

module.exports = VerticalScrollBar;