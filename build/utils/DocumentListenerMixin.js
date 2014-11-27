/**
 * Created by bas on 20.11.2014.
 */
'use strict';

var EventListener = require('./EventListener');

var DocumentListenerMixin = {

    mouseHandlers: {
        down: function () {},
        move: function () {},
        up: function () {}
    },

    onMouseDown: function (handler) {
        this.mouseHandlers.down = EventListener.listen(document, 'mousedown', handler);
    },

    onMouseUp: function (handler) {
        this.mouseHandlers.up = EventListener.listen(document, 'mouseup', handler);
    },

    onMouseMove: function (handler) {
        this.mouseHandlers.move = EventListener.listen(document, 'mousemove', handler);
    },

    offMouseDown: function () {
        this.mouseHandlers.down.remove();
    },

    offMouseUp: function () {
        this.mouseHandlers.up.remove();
    },

    offMouseMove: function () {
        this.mouseHandlers.move.remove();
    }

};

module.exports = DocumentListenerMixin;