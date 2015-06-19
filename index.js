/**
 * @module ScrollButtons
 * @author Vladimir Rodkin <mail@vovanr.com>
 */

define([
    'jquery',
], function (
    $
) {

    'use strict';

    var ScrollButtons;

    /**
     * @param {Object} o Options
     * @param {jQuery} o.$scroll Scroller block
     * @constructor
     * @alias module:ScrollButtons
     */
    ScrollButtons = function (o) {
        this._$scroll = o.$scroll;
    };

    ScrollButtons.prototype = {
        /**
         * @public
         */
        destroy: function () {
            this._$scroll = null;
        },
    };

    return ScrollButtons;

});
