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
			this.setState({color: "danger"}, () => console.log(this.state.color));
		} else {
			this.setState({color: "light"}, () => console.log(this.state.color));
		}
	}

	changeColor() {
		if (this.props.booked == true) {
			this.setState({color: "danger"}, () => console.log(this.state.color));
		} else if (this.state.color === "light") {
			this.setState({color: "primary"}, () => console.log(this.state.color));
			this.props.onChange("increment");
		} else {
			this.setState({color: "light"}, () => console.log(this.state.color));
			this.props.onChange("decrement");
		}
	}

	render() {
		const {time} = this.props;
		console.log(this.props.booking);
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
