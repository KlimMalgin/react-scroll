/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react'),
    cs = React.addons.classSet;

var Reflux = require('reflux'),
    ListenerMixin = Reflux.ListenerMixin;

var VerticalScrollStore = require('./stores/VerticalScrollStore');

var Toddler = require('./Toddler');

var VerticalScrollBar = React.createClass({

    mixins: [
        ListenerMixin,
        Reflux.connect(VerticalScrollStore, 'offset')
    ],

    getDefaultProps: function () {
        return {
            visible: false
        };
    },

    render: function () {
        var cls = {
            'rs-vertical-scroll-bar': true,
            'hide': !this.props.visible
        };

        return (<div className={cs(cls)}>
            <Toddler offset={this.state.offset} />
        </div>);
    }
});

module.exports = VerticalScrollBar;