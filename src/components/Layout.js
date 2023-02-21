import Navigation from "./Navigation";
import Resources from "./Resources";

export default function Layout({ categoryList }) {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
				<Navigation categoryList={categoryList} />
			</nav>
			<main>
				<Resources />
			</main>
			<footer></footer>
		</>
	);
}
