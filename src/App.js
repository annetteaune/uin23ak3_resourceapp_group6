import "./css/main.css";
import Layout from "./components/Layout";
import resources from "./ressurser";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Resources from "./components/Resources";
import Navigation from "./components/Navigation";

function App() {
	// Mappe ut kun unike kategorinavn, kilde:
	// https://plainenglish.io/blog/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
	const categoryList = [...new Set(resources.map((cat) => cat.category))];

	// State for aktiv tab, default på html
	let [selectedTab, setSelectedTab] = useState("html");

	// State for å bytte farge på aktiv tab
	// Kilde: https://stackoverflow.com/questions/56114153/add-active-class-on-a-map-items-react
	const [tabIndex, setTabIndex] = useState(0);

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
						tabIndex={tabIndex}
						setTabIndex={setTabIndex}
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
						tabIndex={tabIndex}
						setTabIndex={setTabIndex}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
