var React = require('react');
var _ = require('lodash');

var Table = React.createClass({
  propTypes: {
    colNames: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      sortByIdx: null,
      sortAscending: true
    }
  },
  setSortByIdx: function (sortByIdx) {
    if (this.state.sortByIdx === sortByIdx) {
      this.setState({sortAscending: !this.state.sortAscending});
    }
    else {
      this.setState({
        sortByIdx: sortByIdx,
        sortAscending: true
      });
    }
  },
  getData: function () {
    if (this.state.sortByIdx === null)
      return this.props.data;
    var sorted = _.sortBy(this.props.data, (r) => {
      return r[this.state.sortByIdx];
    });
    if (!this.state.sortAscending) {
      sorted = _(sorted).reverse().value();
    }
    return sorted;
  },
  render: function () {
    var headerCols = _.map(this.props.colNames, (col, cidx) => {
      return (
        <th key={cidx} onClick={_.partial(this.setSortByIdx, cidx)}>{col}</th>
      );
    });
    var header = <tr>{headerCols}</tr>;
    var rows = _.map(this.getData(), (row, ridx) => {
      var cols = _.map(row, (col, cidx) => <td key={cidx}>{col}</td>);
      return <tr key={ridx}>{cols}</tr>;
    });
    return (
      <table>
        {header}
        {rows}
      </table>
    );
  }
});

module.exports = Table;

