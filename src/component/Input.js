import { TextField } from "@mui/material";

export default function Input({ display, label, setPhoneNumber }) {
	return (
		<>
			<span
				style={{
					fontSize: window.innerHeight / 60,
				}}
			>
				{display}
			</span>

			<TextField
				onChange={(e) => setPhoneNumber(e.target.value)}
				style={{ fontFamily: "Varela Round" }}
			/>
		</>
	);
}
