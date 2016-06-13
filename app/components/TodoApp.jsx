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
            text: "Walk the dog"
          },
          {
            id: uuid(),
            text: "Take over the world!"
          },
          {
            id: uuid(),
            text: "..."
          },
          {
            id: uuid(),
            text: "PROFIT!!!"
          }
        ]
      }
  },

  handleAddTodo: function(text) {
      // const { todos } = this.state;
      //
      // todos.push({
      //   id: (todos.length > 0)?todos[todos.length-1].id + 1:0,
      //   text: text
      // });

      this.setState({
        todos: [
          ...this.state.todos,
          {
              id: uuid(),
              text: text
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
            <TodoList todos={ todos } />
            <AddTodo onAdd={this.handleAddTodo}/>
          </div>
      </div>
    )
  }
});

module.exports = TodoApp;
