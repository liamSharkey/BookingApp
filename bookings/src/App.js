import "./App.css";
import NavComp from "./components/NavComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "./components/Calendar.css";
import Calendar from "react-calendar";
import {Container, Row, Col, Button} from "react-bootstrap";
import Schedule from "./components/Schedule";
import React, {Component} from "react";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {currentDate: "", currentBookings: [], currentHours: ""};
	}

	setDate(date) {
		let hasBookings = false;
		let newBooking = {hours: [], date: "none"};
		fetch("http://localhost:8000/Bookings")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				for (let i of data) {
					if (i.date === date.toString()) {
						newBooking = i;
						hasBookings = true;
					}
				}
				this.setState({
					currentDate: date,
					currentBookings: newBooking.hours,
					currentBookingID: newBooking.id
				});
			});
	}

	submitBooking() {
		let times = Object.keys(this.state.currentHours.selected);

		let entry = {
			date: this.state.currentDate.toString(),
			hours: this.state.currentBookings.concat(times)
		};

		fetch("http://localhost:8000/Bookings/" + this.state.currentBookingID, {
			method: "DELETE"
		});

		fetch("http://localhost:8000/Bookings", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(entry)
		}).then(() => {
			console.log("new hours saved");
			this.setState({currentDate: ""});
		});
	}

	getHours(hours) {
		this.setState({currentHours: hours});
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

							<Button
								className="ms-3 mt-3"
								onClick={this.submitBooking.bind(this)}
							>
								Submit Booking
							</Button>
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
								getHours={(hours) => this.getHours(hours)}
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
