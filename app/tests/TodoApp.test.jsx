const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', ()=> {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });


  it('should add todo to the todos state on handleAddTodo', ()=>{
    const todoText = "text";
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  if('should toggle completed value when handleToggle called', ()=> {
    const todoData = {
      id:11,
      text: "test todo",
      completed: false
    };

    var todoApp = TextUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
        todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

  });
});
