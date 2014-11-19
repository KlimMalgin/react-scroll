/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');

var Toddler = require('./Toddler');

var VerticalScrollBar = React.createClass({
    render: function () {
        return (<div className="rs-scroll-bar">
            <Toddler />
        </div>);
    }
});

module.exports = VerticalScrollBar;