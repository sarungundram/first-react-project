var React = require('react')
var ReactDOM = require('react-dom');
var InfoWidget = require('./components/InfoWidget.jsx');

ReactDOM.render(<InfoWidget infoText="20" infoDesc="New followers added this month" widgetHeight="80"/>, document.getElementById('infoWidget1'));
