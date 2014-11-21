/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var Reflux = require('reflux');

var sync = {
    sync: true
};

var ScrollActions = {

    configNativeScrollTop: Reflux.createAction(sync),
    // ==
    verticalScroll: Reflux.createAction(sync),
    changeVerticalToggleHeight: Reflux.createAction(sync),
    // ==
    startMouseData: Reflux.createAction(sync),
    changeMouseData: Reflux.createAction(sync),
    clearMouseData: Reflux.createAction(sync)

};

module.exports = ScrollActions;