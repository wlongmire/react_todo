const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', ()=>{
  it('should exist', ()=>{
    expect(AddTodo).toExist();
  });

  it('should submit if text', ()=>{
    var spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd= {spy}/>),
        $el = $(ReactDom.findDOMNode(addTodo)),
        testTest = "test todo";

    addTodo.refs.text.value = testTest;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(testTest);
  });

  it('should not submit if text is empty', ()=>{
    var spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd= {spy}/>),
        $el = $(ReactDom.findDOMNode(addTodo));

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
