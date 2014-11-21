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

var ScrollActions = require('./ScrollActions');

var closest = require('closest');

var px = require('./utils/px');

var Toddler = React.createClass({

    mixins: [
        ListenerMixin,
        DocumentListenerMixin,
        Reflux.connect(ScrollBarParamStore)
    ],

    cache: {
        nativeScrollEl: null
    },

    componentDidMount: function () {
        // TODO: getElementsByClassName -> IE8 and less - failed
        this.cache.nativeScrollEl = closest(this.getDOMNode(), 'rs-base-container').getElementsByClassName('rs-native-scroll')[0];
    },

    componentDidUpdate: function () {
        var el = this.getDOMNode();
        el.style.top = px(this.props.offset);
        el.style.height = px(this.state.vToddleHeight);
    },

    handlerMouseDown: function (e) {
        console.log('handlerMouseDown: %o %o', e.pageX, e.pageY);
        this.onMouseMove(this.handleMouseMove);
        this.onMouseUp(this.handleMouseUp);

        ScrollActions.configNativeScrollTop(this.cache.nativeScrollEl.scrollTop);
        ScrollActions.startMouseData(e.pageX, e.pageY);
    },

    handleMouseMove: function (e) {
        console.log('onMouseMove: %o %o', e.pageX, e.pageY);
        ScrollActions.changeMouseData(e.pageX, e.pageY);
    },

    handleMouseUp: function (e) {
        this.offMouseMove();
        this.offMouseUp();
        console.log('onMouseUp: %o %o', e.pageX, e.pageY);
    },

    render: function () {
        return (<div onMouseDown={this.handlerMouseDown} className="rs-toddler"></div>);
    }

});

module.exports = Toddler;