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

    /*componentDidMount: function () {
        var cmp = this.getDOMNode();
        cmp.style.height = this.state.offset + "px";
    },*/

    render: function () {
        console.log(this.state.offset);
        return (<div className="rs-vertical-scroll-bar">
            <Toddler offset={this.state.offset} />
        </div>);
    }
});

module.exports = VerticalScrollBar;