/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var ScrollActions = require('./../ScrollActions');

var ScrollBarParamStore = Reflux.createStore({

    init: function () {
        this.composite = {
            vToddleHeight: 0
        };

        this.listenTo(ScrollActions.changeVerticalToggleHeight, this.vToggleResize);
    },

    getDefaultData: function() {
        return this.composite;
    },

    update : function() {
        this.trigger(this.composite);
    },

    vToggleResize: function (vToggleHeight) {
        console.log("vToggleHeight: ", vToggleHeight);
        this.composite['vToggleHeight'] = vToggleHeight;
        this.update();
    }

});

module.exports = ScrollBarParamStore;