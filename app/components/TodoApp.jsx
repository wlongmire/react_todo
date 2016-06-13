const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function() {
      return {
        showCompleted: false,
        searchText:"",
        todos: [
          {
            id: uuid(),
            text: "Walk the dog",
            completed: true
          },
          {
            id: uuid(),
            text: "Take over the world!",
            completed: false
          },
          {
            id: uuid(),
            text: "Eat something good",
            completed: true
          }
        ]
      }
  },

  handleToggle: function(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
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
              completed: false
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
    var { todos }  = this.state;

    return(
      <div className="row">
          <div className="column small-centered medium-6 large-4">
            <h2>React Todo</h2>
            <TodoSearch onSearch={ this.handleSearch } />
            <TodoList todos={ todos } onToggle={ this.handleToggle }/>
            <AddTodo onAdd={this.handleAddTodo}/>
          </div>
      </div>
    )
  }
});

module.exports = TodoApp;
