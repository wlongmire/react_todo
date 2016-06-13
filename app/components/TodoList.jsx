const React = require('react');

const TodoItem = require('TodoItem');

const TodoList = React.createClass({
  render:function() {
    const { todos } = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} onToggle={ this.props.onToggle }/>
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
