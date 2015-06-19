/**
 * @author Vladimir Rodkin <mail@vovanr.com>
 */

define([
    'jquery',
    'lodash',
    'ScrollButtons',
], function (
    $,
    _,
    ScrollButtons
) {

    'use strict';

    var App;

    App = function () {
        this._initialize();
    };

    App.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            this._ScrollButtons = new ScrollButtons({
                $scroll: $('.js-list__scroll'),
            });
        },
    };

    return new App();

});
