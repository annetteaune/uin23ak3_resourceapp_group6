import Navigation from "./Navigation";
import Resources from "./Resources";

export default function Layout() {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Resources />
			</main>
			<footer></footer>
		</>
	);
}
