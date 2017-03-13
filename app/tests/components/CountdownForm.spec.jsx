var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('app/components/CountdownForm.jsx')

describe('CountdownForm',() => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountDown if seconds is valid', () => {
        var spy = expect.createSpy();
        var cdForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(cdForm));

        cdForm.refs.seconds.value = '123';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(123);
    });

    it('should call not onSetCountDown if seconds is inValid', () => {
        var spy = expect.createSpy();
        var cdForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(cdForm));

        cdForm.refs.seconds.value = 'ugdhbjhd';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});