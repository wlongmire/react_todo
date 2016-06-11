const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState: function() {
      return {
        showCompleted: false,
        searchText:"",
        todos: [
          {
            id: 1,
            text: "Walk the dog"
          },
          {
            id: 2,
            text: "Take over the world!"
          },
          {
            id: 3,
            text: "..."
          },
          {
            id: 4,
            text: "PROFIT!!!"
          }
        ]
      }
  },

  handleAddTodo: function(text) {
      const { todos } = this.state;

      todos.push({
        id: todos[todos.length-1].id + 1,
        text: text
      });

      this.setState({
        todos:todos
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
            <TodoSearch onSearch={ this.handleSearch } />
            <TodoList todos={ todos } />
            <AddTodo onAdd={this.handleAddTodo}/>
          </div>
      </div>
    )
  }
});

module.exports = TodoApp;
