var React = require('react');
var Table = require('./table');

var colNames = ['ID', 'First Name', 'Last Name'];
var data = [
  [1, "Adam", "Donahue"],
  [2, "John", "Smith"],
  [3, "Jane", "Doe"],
];

React.render(
    <Table colNames={colNames} data={data} />,
    document.getElementById('container')
);
