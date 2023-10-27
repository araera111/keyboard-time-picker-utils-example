import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

const rootElem = document.getElementById("root");

if (rootElem === null) {
	throw new Error("rootElement is null");
} else {
	ReactDOM.createRoot(rootElem).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
