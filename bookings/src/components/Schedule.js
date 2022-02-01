import React, {useState} from "react";
import TimeSlot from "./TimeSlot";
import "./Components.css";
import {Row, Col} from "react-bootstrap";

export default function Schedule(props) {
	const [hours, updateHours] = useState(0);

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
		timeSlots.push(
			<TimeSlot
				time={i + ":00"}
				onChange={(change) => changeHours(change)}
			></TimeSlot>
		);
	}

	return (
		<div>
			<Row>
				<Col>{timeSlots.slice(0, 8)}</Col>
				<Col>{timeSlots.slice(8, 16)}</Col>
				<Col>{timeSlots.slice(16, 24)}</Col>
			</Row>
			<h3>Total Hours Booked: {hours}</h3>
			<h5>Price: {getPrice(hours, props.date)}</h5>
		</div>
	);
}
