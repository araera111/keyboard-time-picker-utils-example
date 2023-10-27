import { useState } from "react";
import { InputWrapper } from "./components/InputWrapper";
import "./index.css";
export const App = () => {
	const [value, setValue] = useState("");
	console.log({ value });
	/* app */
	return (
		<div>
			<InputWrapper />
		</div>
	);
};
