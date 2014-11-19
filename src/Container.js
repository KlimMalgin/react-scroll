/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var VerticalScrollBar = require('./VerticalScrollBar');

var Container = React.createClass({

    propTypes: {
        children: pt.renderable.isRequired
    },

    handleScroll: function () {
        debugger;
    },

    render: function () {
        return (
            <div onScroll={this.handleScroll} className="rs-base-container">
                <div className="rs-native-scroll">
                    <div className="rs-content">
                        {this.props.children}
                    </div>
                </div>
                <VerticalScrollBar />
            </div>
        );
    }
});

module.exports = Container;