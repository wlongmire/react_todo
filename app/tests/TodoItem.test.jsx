const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoItem = require('TodoItem');

describe('TodoItem', ()=> {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });
});
