/**
 * Created by bas on 21.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var VerticalScrollMoveStore = require('./VerticalScrollMoveStore');

var VerticalContentScrollStore = Reflux.createStore({

    init: function () {
        this.offsetContent = 0;

        this.listenTo(VerticalScrollMoveStore, this.handleChangeOffset);
    },

    getDefaultData: function() {
        return this.offsetContent;
    },

    update : function(value) {
        this.trigger(this.offsetContent = value);
    },

    handleChangeOffset: function (data) {
        var onePercentValue = data.verticalContentHeight / 100,
            offsetValue = onePercentValue * data.offsetPercentY,
            result = data.contentScrollTop + (data.offsetToddleY >= 0 ? offsetValue : -offsetValue);

        this.update(result);
    }

});

module.exports = VerticalContentScrollStore;