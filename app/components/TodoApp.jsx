const { Link } = require('react-router');
const React = require('react');

const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState: function() {
      return {
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

  render: function() {
    var { todos }  = this.state;

    return(
      <div>
          <TodoList todos={ todos } />
      </div>
    )
  }
});

module.exports = TodoApp;
