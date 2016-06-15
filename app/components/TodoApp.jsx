const React = require('react');

const uuid = require('node-uuid');
const moment = require('moment');
const TodoAPI = require('TodoAPI');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState: function() {
      return {
        showCompleted: false,
        searchText:"",
        todos: TodoAPI.getTodos()
      }
  },

  //called whenever the state changes
  //pushes the current todo array into storage
  componentDidUpdate:function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleToggle: function(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed?moment().unix():undefined;
      }
      return todo;
    });

    this.setState({
      todo: updatedTodos
    });
  },

  handleAddTodo: function(text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
              id: uuid(),
              text: text,
              completed: false,
              createdAt: moment().unix(),
              completedAt: undefined
          }
        ]
      });
  },

  handleSearch:function(showCompleted, searchText) {
    console.log("searching " + searchText + " with showcompleted = " + showCompleted);

    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });

  },

  render: function() {
    var { todos, showCompleted, searchText }  = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h2>React Todo</h2>
            <TodoSearch onSearch={ this.handleSearch } />
            <TodoList todos={ filterTodos } onToggle={ this.handleToggle }/>
            <AddTodo onAdd={this.handleAddTodo}/>
          </div>
      </div>
    )
  }
});

module.exports = TodoApp;
