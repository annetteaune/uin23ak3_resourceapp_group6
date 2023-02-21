import Navigation from "./Navigation";
import Resources from "./Resources";
import Title from "./Title";

export default function Layout({ categoryList, resources }) {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
				<ul>
					{categoryList.map((cat) => (
						<Navigation cat={cat} />
					))}
				</ul>
			</nav>
			<main>
				<article>
					<Title title={resources.title} />
					<Resources resources={resources} />
				</article>
			</main>
			<footer></footer>
		</>
	);
}
