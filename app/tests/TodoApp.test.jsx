const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');
const AddTodo = require('AddTodo');

describe('TodoApp', ()=> {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', ()=>{
    it('adds todo to list', ()=>{

    });
  });
});
