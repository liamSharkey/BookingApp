import React, {useState, useEffect} from "react";
import TimeSlot from "./TimeSlot";
import "./Components.css";
import {Row, Col, Card} from "react-bootstrap";

export default function Schedule(props) {
	const [hours, updateHours] = useState(0);
	console.log(props.bookings);

	useEffect(() => updateHours(0), [props.date]);

	function changeHours(change) {
		if (change == "increment") {
			updateHours((prevHours) => prevHours + 1);
		} else {
			updateHours((prevHours) => prevHours - 1);
		}
	}

	function getPrice(hours, date) {
		if (!date) {
			return "No date selected";
		}
		if (
			date.toLowerCase().includes("sat") ||
			date.toLowerCase().includes("sun")
		) {
			return hours * 150;
		} else {
			return hours * 100;
		}
	}

	let timeSlots = [];
	for (let i = 0; i < 24; i++) {
		let booked = false;
		if (props.bookings.includes(i + ":00")) {
			booked = true;
		}
		timeSlots.push(
			<TimeSlot
				time={i + ":00"}
				booked={booked}
				date={props.date}
				onChange={(change) => changeHours(change)}
			></TimeSlot>
		);
	}

	return (
		<Card className="py-3">
			<h3>Total Hours Booked: {hours}</h3>
			<h5>Price: {getPrice(hours, props.date)}</h5>
			<Row>
				<Col>{timeSlots.slice(0, 8)}</Col>
				<Col>{timeSlots.slice(8, 16)}</Col>
				<Col>{timeSlots.slice(16, 24)}</Col>
			</Row>
		</Card>
	);
}
