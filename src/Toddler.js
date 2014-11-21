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
        nativeScrollContainer: null
    },

    componentDidMount: function () {
        this.cache.nativeScrollContainer = closest(this.getDOMNode(), "rs-base-container").getElementsByClassName("rs-native-scroll")[0];
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

        ScrollActions.configNativeScrollTop(this.getDOMNode().offsetTop);
        ScrollActions.configVerticalScrollHeight(this._owner.getDOMNode().clientHeight);
        ScrollActions.startMouseData(e.pageX, e.pageY);
    },

    handleMouseMove: function (e) {
        console.log(this.cache.nativeScrollContainer.scrollTop);
        ScrollActions.configContentScrollTop(this.cache.nativeScrollContainer.scrollTop);
        ScrollActions.changeMouseData(e.pageX, e.pageY);
    },

    handleMouseUp: function () {
        this.offMouseMove();
        this.offMouseUp();
    },

    render: function () {
        return (<div onMouseDown={this.handlerMouseDown} className="rs-toddler"></div>);
    }

});

module.exports = Toddler;