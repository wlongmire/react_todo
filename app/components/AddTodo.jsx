const React = require('react');

const AddTodo = React.createClass({
  onSubmit:function(e){
      e.preventDefault();

      var text = this.refs.text.value;
      if (text.length > 0) {
        this.refs.text.value = "";
        this.props.onAdd(text);
      } else {
        this.refs.text.focus();
      }
  },

  render:function(){
    return(
      <div>
        <form onSubmit={this.onSubmit} ref="form" className="addTodoForm">
          <input type="text" placeholder="What do you need to do?" ref="text"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>);
  }
});

module.exports = AddTodo;
