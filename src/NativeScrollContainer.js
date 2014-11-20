/** @jsx React.DOM*/
/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var ScrollActions = require('./ScrollActions');

var NativeScrollContainer = React.createClass({

    propTypes: {
        children: pt.renderable.isRequired
    },

    handleScroll: function () {
        /*var parent = this._owner.getDOMNode();
        debugger;*/
        console.log(this.getDOMNode().scrollTop);
        ScrollActions.verticalScroll(this.getDOMNode().scrollTop);
    },

    render: function () {
        return (
            <div className="rs-native-scroll" onScroll={this.handleScroll}>
                <div className="rs-content">
                        {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = NativeScrollContainer;