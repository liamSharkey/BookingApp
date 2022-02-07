import React, {Component} from "react";
import {Card} from "react-bootstrap/esm";

export class TimeSlot extends Component {
	constructor(props) {
		super(props);

		this.state = {color: "light"};
	}

	componentDidUpdate(prevProps) {
		if (this.props.date !== prevProps.date) {
			this.chooseColor();
		}
	}

	chooseColor() {
		if (this.props.booked == true) {
			this.setState({color: "danger"});
		} else {
			this.setState({color: "light"});
		}
	}

	changeColor() {
		if (this.props.booked == true) {
			this.setState({color: "danger"});
		} else if (this.state.color === "light") {
			this.setState({color: "primary"});
			this.props.onChange(["increment", this.props.time]);
		} else {
			this.setState({color: "light"});
			this.props.onChange(["decrement", this.props.time]);
		}
	}

	render() {
		const {time} = this.props;
		return (
			<Card
				bg={this.state.color}
				className="mx-4 my-1"
				onClick={() => this.changeColor()}
			>
				<div>
					<p>{time}</p>
				</div>
			</Card>
		);
	}
}

export default TimeSlot;
