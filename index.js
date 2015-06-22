/**
 * Scrolls list on buttons hover
 *
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
     * @param {jQuery} o.$buttons Scroller buttons
     * @constructor
     * @alias module:ScrollButtons
     */
    ScrollButtons = function (o) {
        this._$scroll = o.$scroll;
        this._$buttons = o.$buttons;

        this._amount = '';

        this._init();
    };

    ScrollButtons.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _init: function () {
            this._bindControls();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
            var _this = this;
            this._$buttons
                .on('mouseenter.scrollButtons', function () {
                    var $this = $(this);
                    _this._amount = $this.data('scroll-amount');
                    _this._scroll();
                })
                .on('mouseleave.scrollButtons', function () {
                    _this._amount = '';
                });
        },

        /**
         * Show buttons
         *
         * @public
         */
        show: function () {
            this._$buttons.show();
        },

        /**
         * Hide buttons
         *
         * @public
         */
        hide: function () {
            this._$buttons.hide();
        },

        /**
         * Scroll list
         *
         * @private
         */
        _scroll: function () {
            var _this = this;
            this._$scroll.animate({
                scrollTop: _this._amount,
            }, 100, 'linear', function () {
                if (_this._amount !== '') {
                    _this._scroll();
                }
            });
        },

        /**
         * Destroy instance
         *
         * @public
         */
        destroy: function () {
            this._$buttons.off('mouseenter.scrollButtons mouseleave.scrollButtons');
            this._amount = '';
            this._$scroll = null;
        },
    };

    return ScrollButtons;

});
