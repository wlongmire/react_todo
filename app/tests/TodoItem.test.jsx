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

  it ('should call onToggle prop with id on click', ()=> {
    const todoData = {
      id: 999,
      test: "Test Todo",
      completed: true
    },
    spy = expect.createSpy(),
    todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={ spy }/>),
    $el = $(ReactDom.findDOMNode(todoItem));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});
