import "./App.css";
import NavComp from "./components/NavComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import {Container, Row, Col} from "react-bootstrap";
import Schedule from "./components/Schedule";

import React, {Component} from "react";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {currentDate: ""};
	}

	setDate(date) {
		this.setState({currentDate: date}, () => console.log(date));
	}

	render() {
		return (
			<div>
				<NavComp></NavComp>
				<Container>
					<Row className="column-parent">
						<Col
							className="py-5"
							style={{
								justifyContent: "center",
								backgroundColor: "aqua"
							}}
						>
							<Calendar
								className="mx-auto"
								onClickDay={(value, event) => this.setDate(value)}
							></Calendar>
						</Col>

						<Col
							className="py-5"
							style={{
								backgroundColor: "pink",
								textAlign: "center"
							}}
						>
							<p>{this.state.currentDate.toString()}</p>
							<Schedule date={this.state.currentDate.toString()}></Schedule>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
