var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('app/components/Clock.jsx');

describe('Clock Testing',() => {
    it('should exist', () => {
        expect(Clock).toExist();
    })
});
