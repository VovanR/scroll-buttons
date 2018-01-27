/* global define */
/* eslint import/no-amd: 0 */

/**
 * @author Vladimir Rodkin <mail@vovanr.com>
 */

define([
	'jquery',
	'lodash',
	'ScrollButtons'
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
			this._scrollButtons = new ScrollButtons({
				$scroll: $('.js-list__scroll'),
				$buttons: $('.js-scroll-buttons__button')
			});
			var _this = this;
			$('.js-list__container')
				.mouseenter(function () {
					_this._scrollButtons.show();
				})
				.mouseleave(function () {
					_this._scrollButtons.hide();
				});
			this._fillList(100);
		},

		/**
		 * @param {Number} count
		 * @private
		 */
		_fillList: function (count) {
			var $list = $('.js-list');
			var items = [];
			_.times(count, function () {
				items.push('<li>Lorem ipsum dolor sit amet</li>');
			});
			items = items.join('');
			$list.html(items);
		}
	};

	return new App();
});
