/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react/addons'),
    pt = React.PropTypes;

var ScrollBar = require('./ScrollBar');

var Container = React.createClass({

    propTypes: {
        children: pt.renderable.isRequired
    },

    render: function () {
        return (
            <div className="rs-base-container">
                <div className="rs-native-scroll">
                    <div className="rs-content">
                        {this.props.children}
                    </div>
                    <ScrollBar />
                </div>
            </div>
        );
    }
});

module.exports = Container;