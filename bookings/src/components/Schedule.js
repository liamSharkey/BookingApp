import React, {useState, useEffect} from "react";
import TimeSlot from "./TimeSlot";
import "./Components.css";
import {Row, Col, Card, Button} from "react-bootstrap";

export default function Schedule(props) {
	const [hours, updateHours] = useState({selected: [], total: 0});

	useEffect(() => updateHours({selected: {}, total: 0}), [props.date]);

	useEffect(() => {
		props.getHours({
			selected: hours.selected,
			total: hours.total
		});
	}, [hours]);

	function changeHours(change) {
		if (change[0] == "increment") {
			updateHours((prevHours) => {
				let tempDict = prevHours.selected;
				tempDict[change[1]] = true;

				return {
					selected: tempDict,
					total: prevHours.total + 1
				};
			});
		} else {
			updateHours((prevHours) => {
				let tempDict = prevHours.selected;
				delete tempDict[change[1]];

				return {total: prevHours.total - 1, selected: tempDict};
			});
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
			return hours.total * 150;
		} else {
			return hours.total * 100;
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
				key={i}
				time={i + ":00"}
				booked={booked}
				date={props.date}
				onChange={(change) => changeHours(change)}
			></TimeSlot>
		);
	}

	return (
		<Card className="py-3">
			<h3>Total Hours Booked: {hours.total}</h3>
			<h5>Price: {getPrice(hours, props.date)}</h5>
			<Row>
				<Col>{timeSlots.slice(0, 8)}</Col>
				<Col>{timeSlots.slice(8, 16)}</Col>
				<Col>{timeSlots.slice(16, 24)}</Col>
			</Row>
		</Card>
	);
}
