/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');

var px = require('./utils/px');

var Toddler = React.createClass({

    componentDidUpdate: function () {
        var el = this.getDOMNode();
        el.style.top = px(this.props.offset);
    },

    render: function () {
        return (<div className="rs-toddler"></div>);
    }

});

module.exports = Toddler;