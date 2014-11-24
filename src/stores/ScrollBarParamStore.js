/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var ScrollActions = require('./../ScrollActions');

var ScrollBarParamStore = Reflux.createStore({

    init: function () {
        this.composite = {
            vToddleHeight: 0,
            onePercentValue: 0
        };

        this.listenTo(ScrollActions.changeVerticalToggleHeight, this.vToggleResize);
    },

    getDefaultData: function() {
        return this.composite;
    },

    update : function() {
        this.trigger(this.composite);
    },

    vToggleResize: function (vToddleHeight, onePercentValue) {
        this.composite['vToddleHeight'] = vToddleHeight;
        this.composite['onePercentValue'] = onePercentValue;
        this.update();
    }

});

module.exports = ScrollBarParamStore;