/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var ScrollActions = require('./../ScrollActions');
var VerticalScrollMoveStore = require('./VerticalScrollMoveStore');

/**
 * Получает данные о вертикальном смещении (scrollTop) для блока с контентом.
 * Транслирует их дальше для изменения позиции бегунка с скроллбаре
 */

var VerticalScrollStore = Reflux.createStore({

    init: function () {
        this.offset = 0;

        this.listenTo(ScrollActions.verticalScroll, this.handleScroll);
        this.listenTo(VerticalScrollMoveStore, this.handleVerticalScrollMove);
    },

    getDefaultData: function() {
        return this.offset;
    },

    update : function(offset) {
        this.trigger(this.offset = offset);
    },

    handleScroll: function (scrollTop) {
        console.log('VerticalScrollStore::verticalScroll %o', scrollTop);
        this.update(scrollTop);
    },

    handleVerticalScrollMove: function (data) {
        //console.log('handleVerticalScrollMove', arguments);

        var upperBound = data.verticalScrollHeight - data.vToddleHeight;

        var result = data.startScrollTop + data.offsetToddleY;
        this.update(
            result < 0 ? 0 :
                result >= upperBound ?
                    upperBound : result);
    }

});

module.exports = VerticalScrollStore;