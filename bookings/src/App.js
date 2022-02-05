import "./App.css";
import NavComp from "./components/NavComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "./components/Calendar.css";
import Calendar from "react-calendar";
import {Container, Row, Col} from "react-bootstrap";
import Schedule from "./components/Schedule";
import React, {Component} from "react";
const Bookings = require("./bookings.json").Bookings;

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {currentDate: "", currentBookings: ""};
	}

	setDate(date) {
		let hasBookings = false;
		let newBooking = [];
		for (let i of Bookings) {
			if (i.date === date.toString()) {
				newBooking = i.hours;
				hasBookings = true;
			}
		}
		this.setState({currentDate: date, currentBookings: newBooking});
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
								justifyContent: "center"
							}}
						>
							<Calendar
								className="mx-auto mt-5"
								onClickDay={(value, event) => this.setDate(value)}
							></Calendar>
						</Col>

						<Col
							className="py-5"
							style={{
								textAlign: "center"
							}}
						>
							<Schedule
								date={this.state.currentDate.toString()}
								bookings={this.state.currentBookings}
							></Schedule>
							<p className="mt-3">{this.state.currentDate.toString()}</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
