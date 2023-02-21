import "./css/main.css";
import Layout from "./components/Layout";
import resources from "./ressurser";

function App() {
	// Mappe ut kun unike kategorinavn, kilde:
	// https://plainenglish.io/blog/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
	const categoryList = [...new Set(resources.map((cat) => cat.category))];
  
	return (
		<div className="App">
			<Layout categoryList={categoryList} resources={resources}/>
		</div>
	);
}

export default App;
