var React = require( "react" );
var classNames = require( "classnames" );

var EntryRow = React.createClass({
	propTypes: {
		id: React.PropTypes.number.isRequired,
		onClick: React.PropTypes.func.isRequired,
		name: React.PropTypes.string,
		current: React.PropTypes.bool
	},	
	getDefaultProps: function () {
		return {
			current: false
		};
	},
	render: function () {
		var classes = classNames( "list-group-item", {
			active: this.props.current,
			disabled: this.props.status === "disqualified",
			"list-group-item-success": this.props.status === "winner"
		});

		var onClick;

		if ( this.props.status !== "disqualified" ) {
			onClick = this.props.onClick;
		}

		return <li className={classes} onClick={onClick}>
			{this.props.name}
		</li>;
	}
});

module.exports = EntryRow;