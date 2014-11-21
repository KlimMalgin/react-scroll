/**
 * Created by bas on 21.11.2014.
 */
'use strict';

var Reflux = require('reflux');
var ScrollActions = require('./../ScrollActions');

var VerticalScrollMoveStore = Reflux.createStore({

    init: function () {
        this.commonData = {

            /**
             * Процентное отношение высоты toddle к высоте скроллбара
             */
            contentCorellation: 0,

            /**
             * Высота toddle-элемента
             */
            vToddleHeight: 0,

            /**
             * Величина scrollTop блока с браузерным скроллом в момент начала перетаскивания toddle
             */
            nativeScrollTop: 0
        };

        this.mouseData = {
            /**
             * Стартовая позиция toddle-элемента по оси X
             */
            startPageX: null,

            /**
             * Стартовая позиция toddle-элемента по оси Y
             */
            startPageY: null
        };

        this.composite = {
            /**
             * На сколько процентов смещен toddle относительно
             * стартовой позиции по оси X (абсолютное значение)
             */
            offsetPercentX: 0,

            /**
             * На сколько пикселей смещен toddle относительно
             * стартовой позиции по оси X
             */
            offsetToddleX: 0,

            /**
             * На сколько процентов смещен toddle относительно
             * стартовой позиции по оси Y (абсолютное значение)
             */
            offsetPercentY: 0,

            /**
             * На сколько пикселей смещен toddle относительно
             * стартовой позиции по оси Y
             */
            offsetToddleY: 0,

            /**
             * Стартовая позиция scrollTop блока с браузерным скроллом в момент начала перетаскивания toddle
             */
            startScrollTop: 0,

            /**
             * Высота рабочей области скроллбара
             */
            verticalScrollHeight: 0,

            /**
             * Высота toddle-элемента
             */
            vToddleHeight: 0,

            contentScrollTop: 0,

            verticalContentHeight: 0
        };

        this.listenTo(ScrollActions.configNativeScrollTop, this.saveNativeScrollTop);
        this.listenTo(ScrollActions.configVerticalScrollHeight, this.saveVerticalScrollHeight);
        // ==
        this.listenTo(ScrollActions.configContentHeight, this.saveContentHeight);
        this.listenTo(ScrollActions.configContentScrollTop, this.saveContentScrollTop);  // TODO: WTF?? - Dublicate of configNativeScrollTop
        // ==
        this.listenTo(ScrollActions.changeVerticalToggleHeight, this.savePercentValue);
        // ==
        this.listenTo(ScrollActions.startMouseData, this.handleStartMouseData);
        this.listenTo(ScrollActions.changeMouseData, this.handleChangeMouseData);
        this.listenTo(ScrollActions.clearMouseData, this.handleClearMouseData);
    },

    getDefaultData: function() {
        return this.composite;
    },

    update : function() {
        this.trigger(this.composite);
    },

    handleStartMouseData: function (pageX, pageY) {
        this.mouseData['startPageX'] = pageX;
        this.mouseData['startPageY'] = pageY;
    },

    handleChangeMouseData: function (pageX, pageY) {
        var toddleHeight = this.commonData['vToddleHeight'],
            contentCorellation = this.commonData['contentCorellation'];

        // Величина одного процента смещения toddle-элемента
        var onePercentValue = toddleHeight / (contentCorellation * 100);

        this.composite['contentCorellation'] = contentCorellation;

        this.composite['offsetPercentY'] = Math.abs(pageY - this.mouseData.startPageY) / onePercentValue;
        this.composite['offsetToddleY'] = pageY - this.mouseData.startPageY;
        this.composite['offsetToddleX'] = pageX - this.mouseData.startPageX;

        this.composite['startScrollTop'] = this.commonData['nativeScrollTop'];
        this.update();
    },

    handleClearMouseData: function () {
        this.composite['offsetToddleY'] = 0;
        this.composite['offsetToddleX'] = 0;
    },

    savePercentValue: function (vToddleHeight, onePercentValue) {
        this.commonData['vToddleHeight'] = vToddleHeight;
        this.composite['vToddleHeight'] = vToddleHeight;
        this.commonData['contentCorellation'] = onePercentValue;
    },

    saveNativeScrollTop: function (nativeContainerScrollTop) {
        this.commonData['nativeScrollTop'] = nativeContainerScrollTop;
    },

    saveVerticalScrollHeight: function (verticalScrollHeight) {
        this.composite['verticalScrollHeight'] = verticalScrollHeight;
    },

    saveContentHeight: function (verticalContentHeight) {
        this.composite['verticalContentHeight'] = verticalContentHeight;
    },

    saveContentScrollTop: function (contentScrollTop) {
        this.composite['contentScrollTop'] = contentScrollTop;
    }

});

module.exports = VerticalScrollMoveStore;