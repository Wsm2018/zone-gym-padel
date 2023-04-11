import React, { useState } from "react";
import { styles } from "./styles";
import logo from "../assets/padel.png";
import aura from "../assets/aura.png";
import { Button, Typography } from "@mui/material";
import { proceedToPay } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "../component/Input";

export default function MobileView() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [clicked, setClicked] = useState(false);

	const validate = () => {
		if (phoneNumber === "") {
			setClicked(false);
			alert("Please fill all the fields");
			return false;
		}

		const numExp = new RegExp("^[0-9]+$");
		if (!numExp.test(phoneNumber)) {
			setClicked(false);
			alert("Invalid phone number ");
			return false;
		}

		return true;
	};

	const proceed = () => {
		setClicked(true);
		if (validate()) proceedToPay({ phoneNumber, source: "Padel" }, setClicked);
	};

	return (
		<div style={styles.container}>
			<div
				style={{
					display: "flex",
					// flex: 1,
					backgroundColor: "#1d1d1b",
					height: "10%",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<img
					src={logo}
					alt="logo"
					style={{ height: window.innerHeight / 12, marginLeft: "2%" }}
				/>
				{/* <img
					src={aura}
					alt="logo"
					style={{ height: window.innerHeight / 13, marginRight: "2%" }}
				/> */}
			</div>

			<div
				style={{
					display: "flex",
					flex: 0.5,
					flexDirection: "column",
					justifyContent: "space-evenly",
					marginRight: "5%",
					marginLeft: "5%",
				}}
			>
				<Input
					label={"phone"}
					display={"Phone Number"}
					setPhoneNumber={setPhoneNumber}
				/>
			</div>

			<div
				style={{
					display: "flex",
					flex: 1,
					marginLeft: "5%",
					marginRight: "5%",
					justifyContent: "space-between",
				}}
			>
				{/* <Typography fontWeight={"bold"}>Amount</Typography>
				<Typography fontWeight={"bold"}>{`400 QAR`}</Typography> */}
			</div>
			<div
				style={{
					display: "flex",
					flex: 1,
					justifyContent: "center",
					alignItems: "flex-end",
					marginBottom: "5%",
				}}
			>
				{clicked ? (
					<CircularProgress />
				) : (
					<Button
						variant="outlined"
						style={styles.buttonStyle}
						onClick={() => proceed()}
					>
						Proceed to Pay
					</Button>
				)}
			</div>
		</div>
	);
}
