const apiUrl = "https://zone-gym-app.herokuapp.com/pay";

const proceedToPay = async (body, setClicked) => {
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...body }),
	});
	const json = await response.json();
	if (!json.payUrl) {
		alert("Invalid Details");
		setClicked(false);
		return;
	}
	window.location = json.payUrl;
};

export { proceedToPay };
