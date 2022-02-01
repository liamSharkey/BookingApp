import React, {Component} from "react";
import {Card, Button} from "react-bootstrap/esm";

export class TimeSlot extends Component {
	constructor(props) {
		super(props);

		this.state = {color: "light"};
	}

	toggleColor() {
		if (this.state.color == "light") {
			this.setState({color: "primary"}, () => console.log(this.state.color));
			this.props.onChange("increment");
		} else {
			this.setState({color: "light"}, () => console.log(this.state.color));
			this.props.onChange("decrement");
		}
	}

	render() {
		const {time} = this.props;
		return (
			<Card
				bg={this.state.color}
				className="mx-4 my-1"
				onClick={() => this.toggleColor()}
			>
				<div>
					<p>{time}</p>
				</div>
			</Card>
		);
	}
}

export default TimeSlot;
