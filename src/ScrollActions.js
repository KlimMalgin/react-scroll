/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var Reflux = require('reflux');

var sync = {
    sync: true
};

var ScrollActions = {

    verticalScroll: Reflux.createAction(sync),
    changeVerticalToggleHeight: Reflux.createAction(sync)

};

module.exports = ScrollActions;