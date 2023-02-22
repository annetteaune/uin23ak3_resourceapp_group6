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

  // Finner aktiv kategori for videre mapping av linker
	const filter = resources.filter((find) => find.category === selectedTab);

  //Default router
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
      {/* Router til samme oppsett av siden når man trykker på en tab, unngår åpning av "blank" side */}
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
