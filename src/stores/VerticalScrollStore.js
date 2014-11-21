/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var ScrollActions = require('./../ScrollActions');

/**
 * Получает данные о вертикальном смещении (scrollTop) для блока с контентом.
 * Транслирует их дальше для изменения позиции бегунка с скроллбаре
 */

var VerticalScrollStore = Reflux.createStore({

    init: function () {
        this.offset = 0;

        this.listenTo(ScrollActions.verticalScroll, this.handleScroll);
    },

    getDefaultData: function() {
        return this.offset;
    },

    update : function(offset) {
        this.trigger(this.offset = offset);
    },

    handleScroll: function (scrollTop) {
        console.log('VerticalScrollStore::verticalScroll %o', scrollTop);
        var offset = scrollTop;
        this.update(offset);
    }

});

module.exports = VerticalScrollStore;