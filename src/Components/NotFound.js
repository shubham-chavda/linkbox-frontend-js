import { Result } from "antd";
import React from "react";
import NotFoundSVG from "../assets/not_found.svg";

const NotFound = () => (
	<div
		style={{
			fontSize: "2vw",
			position: "absolute",
			left: "40%",
			top: "10%",
			transformBox: "translate(-50%, -50%)",
			width: "20vw",
		}}
	>
		{/* <NotFoundSVG /> */}
			
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			
		/>
		
	</div>
);

export default NotFound;
