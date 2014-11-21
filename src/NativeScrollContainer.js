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
var VerticalScrollMoveStore = require('./stores/VerticalScrollMoveStore');
var VerticalContentScrollStore = require('./stores/VerticalContentScrollStore');

var closest = require('closest');

var NativeScrollContainer = React.createClass({

    mixins: [
        ListenerMixin,
        Reflux.connect(ScrollBarParamStore),
        Reflux.connect(VerticalContentScrollStore, 'offsetContent')/*,
        Reflux.connect(VerticalScrollMoveStore)*/
    ],

    propTypes: {
        children: pt.renderable.isRequired
    },

    cache: {
        /**
         * Значение в пикселах равное одному проценту от высоты блока с контентом
         */
        onePercentValue: 0
    },

    /*componentDidMount: function () {
        this.cache.onePercentValue = closest(this.getDOMNode(), "rs-base-container").clientHeight / 100
    },

    componentDidUpdate: function (prevProps, prevState) {
        var offsetValue = this.cache.onePercentValue * prevState.offsetPercentY,
            result = prevState.startScrollTop +
                        prevState.offsetToddleY >= 0 ? offsetValue : -offsetValue;

        this.getDOMNode().scrollTop = result;

        console.log('NativeScrollContainer::componentDidUpdate %o %o', arguments, result);
    },*/

    componentDidUpdate: function () {
        this.getDOMNode().scrollTop = this.state.offsetContent;
    },

    handleScroll: function () {
        var offset = Math.ceil(this.getDOMNode().scrollTop * this.state.onePercentValue);
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