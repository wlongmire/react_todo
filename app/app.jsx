const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
const TodoApp = require('TodoApp');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
