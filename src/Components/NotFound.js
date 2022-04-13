import React from "react";
import NotFoundSVG from "../assets/not_found.svg";

const NotFound = () => (
	<div
		style={{
			fontSize: "2vw",
			position: "absolute",
			left: "40%",
			top: "30%",
			transformBox: "translate(-50%, -50%)",
			width: "20vw",
		}}
	>
		{/* <NotFoundSVG /> */}
		<center>Page Not Found</center>
	</div>
);

export default NotFound;
