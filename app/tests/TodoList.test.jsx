const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const TodoItem = require('TodoItem');

describe('TodoList', ()=> {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo components for each todo item', () => {
    var todos = [{
      id:1,
      text: "todo 1"
    },
    {
      id:2,
      text: "todo 2"
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosComponents.length).toBe(todos.length);
  })
});
