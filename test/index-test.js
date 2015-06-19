requirejs([
    'jquery',
    'chai',
    'sinon',
    'lodash',
    '../index',
], function (
    $,
    chai,
    sinon,
    _,
    ScrollButtons
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('ScrollButtons', function () {
        /**
         */
        var module = function (o) {
            var $fixtures = $('#fixtures');

            o = _.defaults(
                o || {},
                {
                    $scroll: $fixtures.find('.js-list__scroll'),
                }
            );

            return new ScrollButtons(o);
        };

        /**
         * @return {Number}
         */
        var getScrollerTop = function () {
            return $('#fixtures .js-list__scroll')[0].scrollTop;
        };

        /**
         * @param {Number} scrollTop
         */
        var setScrollerTop = function (scrollTop) {
            $('#fixtures .js-list__scroll')[0].scrollTop = scrollTop;
        };

        var _bFixtureTemplate = $('#fixture-template');
        var _fixtureTemplate = _bFixtureTemplate.html();
        _bFixtureTemplate.empty();

        beforeEach(function () {
            $('#fixtures').html(_fixtureTemplate);
            assert.equal(getScrollerTop(), 0);
        });

        afterEach(function () {
            // setScrollerTop(0);
        });

        describe('constructor', function () {
            it('should have `$scroll` option', function () {
                var m = module();
                assert.ok(m._$scroll.length);
            });
        });

        describe('_init', function () {
        });

        describe('_bindControls', function () {
        });

        describe('#destroy', function () {
            it('should remove link from scroller block', function () {
                var m = module();
                assert.ok(m._$scroll.length);
                m.destroy();
                assert.isNull(m._$scroll);
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
