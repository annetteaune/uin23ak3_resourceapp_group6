import "./css/main.css";
import Layout from "./components/Layout";
import resources from "./ressurser";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
	// Mappe ut kun unike kategorinavn, kilde:
	// https://plainenglish.io/blog/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
	const categoryList = [...new Set(resources.map((cat) => cat.category))];

	// State for aktiv tab, default på html
	let [selectedTab, setSelectedTab] = useState("html");

	const filter = resources.filter((find) => find.category === selectedTab);

	return (
		<Routes>
			<Route
				path="/"
				index
				element={
					<Layout
						categoryList={categoryList}
						resources={resources}
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						filter={filter}
					/>
				}
			/>
			<Route
				path={selectedTab}
				element={
					<Layout
						categoryList={categoryList}
						resources={resources}
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
						filter={filter}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
