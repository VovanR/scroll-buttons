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
                    $buttons: $fixtures.find('.js-scroll-buttons__button'),
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
            setScrollerTop(0);
        });

        describe('constructor', function () {
            it('should have `$scroll` option', function () {
                var m = module();
                assert.ok(m._$scroll.length);
            });

            it('should have `$buttons` option', function () {
                var m = module();
                assert.ok(m._$buttons.length);
            });
        });

        describe('_init', function () {
            it('should fire `_bindControls`', function () {
                var m = module();
                sinon.stub(m, '_bindControls');
                assert.notOk(m._bindControls.called);
                m._init();
                assert.ok(m._bindControls.calledOnce);
            });
        });

        describe('_bindControls', function () {
            it('should bind buttons', function () {
                var m = module();
                sinon.stub(m, '_scroll');
                var $buttons = $('#fixtures .js-scroll-buttons__button');
                $buttons.first().trigger('mouseover');
                assert.ok(m._scroll.called);
                $buttons.first().trigger('mouseout');
            });

            it('should bind scroll up button', function (done) {
                var m = module();
                setScrollerTop(1000);
                var $button = $('#fixtures .scroll-buttons__button_direction_up');
                var old = getScrollerTop();
                assert.ok(old > 0);
                $button.trigger('mouseover');
                setTimeout(function () {
                    assert.ok(old > getScrollerTop());
                    $button.trigger('mouseout');
                    done();
                }, 100);
            });

            it('should bind scroll down button', function (done) {
                var m = module();
                setScrollerTop(0);
                var $button = $('#fixtures .scroll-buttons__button_direction_down');
                assert.equal(getScrollerTop(), 0);
                $button.trigger('mouseover');
                setTimeout(function () {
                    assert.ok(getScrollerTop() > 0);
                    $button.trigger('mouseout');
                    done();
                }, 100);
            });
        });

        describe('#show', function () {
            it('should show scroll buttons', function () {
                var m = module();
                var $buttons = $('#fixtures .js-scroll-buttons__button');
                assert.equal($buttons.css('display'), 'none');
                m.show();
                assert.equal($buttons.css('display'), 'block');
            });
        });

        describe('#hide', function () {
            it('should hide scroll buttons', function () {
                var m = module();
                var $buttons = $('#fixtures .js-scroll-buttons__button');
                $buttons.show();
                assert.equal($buttons.css('display'), 'block');
                m.hide();
                assert.equal($buttons.css('display'), 'none');
            });
        });

        describe('_scroll', function () {
            it('should scroll list on scroll amount option', function (done) {
                var m = module();
                m._amount = '+=50';
                assert.equal(getScrollerTop(), 0);
                m._scroll();
                setTimeout(function () {
                    assert.notEqual(getScrollerTop(), 0);
                    m._amount = '';
                    done();
                }, 100);
            });
        });

        describe('#destroy', function () {
            it('should remove link from scroller block', function () {
                var m = module();
                assert.ok(m._$scroll.length);
                m.destroy();
                assert.isNull(m._$scroll);
            });

            it('should reset `_amount`', function () {
                var m = module();
                m._amount = '+50';
                m.destroy();
                assert.equal(m._amount, '');
            });

            it('should unbind buttons', function (done) {
                var m = module();
                sinon.stub(m, '_scroll');
                var $down = $('#fixtures .scroll-buttons__button_direction_down');
                var $up = $('#fixtures .scroll-buttons__button_direction_up');
                m.destroy();
                $down.trigger('mouseover');
                $up.trigger('mouseover');
                setTimeout(function () {
                    assert.notOk(m._scroll.called);
                    done();
                }, 100);
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
