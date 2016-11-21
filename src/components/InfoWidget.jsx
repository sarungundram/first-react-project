var React = require('react');

var InfoWidget = React.createClass({
	render: function() {
		var divStyle = {
			textAlign:'center'
		}
		divStyle.height = this.props.widgetHeight || 80;

		return (
			<div className="panel panelDefault" style={divStyle}>
				<h5>{this.props.infoText}<br/><small>{this.props.infoDesc}</small></h5>
			</div>
		);
	}
});

module.exports = InfoWidget;
