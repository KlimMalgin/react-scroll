/** @jsx React.DOM*/
/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var closest = require('closest');

var ScrollActions = require('./ScrollActions');

var ContentContainer = React.createClass({displayName: 'ContentContainer',

    propTypes: {
        children: pt.renderable.isRequired
    },

    componentDidMount: function () {
        ScrollActions.configContentHeight(this.getDOMNode().clientHeight);
        this.updateComponentData();
    },

    updateComponentData: function () {
        var el = this.getDOMNode(),
            baseContainer = closest(el, 'rs-base-container'),
            contentContainer = el,
            baseContainerHeight = baseContainer.clientHeight,
            contentContainerHeight = contentContainer.clientHeight,
            // ==
            onePercent = contentContainerHeight / 100,
            realPercent = (baseContainerHeight / onePercent) * 0.01,
            // ==
            verticalToddleHeight = Math.ceil(realPercent * baseContainerHeight);

        ScrollActions.changeVerticalToggleHeight(verticalToddleHeight, realPercent);
    },

    render: function () {
        return (
            React.DOM.div({className: "rs-content"}, 
                this.props.children
            )
        );
    }
});

module.exports = ContentContainer;