var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('app/components/Clock.jsx');

describe('Clock Testing',() => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds="62"/>); // <Clock totalSeconds={62}/> also applicable
            var $el = $(ReactDOM.findDOMNode(clock));

            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');

        })
    })

    describe('#formatSeconds', function() {
        it('should format seconds', function() {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec < 10', function() {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});
