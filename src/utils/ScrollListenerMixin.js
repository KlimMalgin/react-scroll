/**
 * Created by bas on 21.11.2014.
 */
'use strict';

var EventListener = require('./EventListener');

var ScrollListenerMixin = {

    scrollHandlers: {
        scroll: function () {}
    },

    onScroll: function (el, handler) {
        this.scrollHandlers.scroll = EventListener.listen(el, 'scroll', handler);
    },

    offScroll: function () {
        this.scrollHandlers.scroll.remove();
        this.scrollHandlers.scroll = function () {};
    }

};

module.exports = ScrollListenerMixin;