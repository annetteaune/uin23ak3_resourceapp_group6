import Navigation from "./Navigation";
import Resources from "./Resources";
import Title from "./Title";
import resources from "../ressurser";

export default function Layout({ categoryList }) {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
				<ul>
					{categoryList.map((cat, index) => (
						<Navigation cat={cat} index={index} />
					))}
				</ul>
			</nav>
			<main>
				<article>
					{categoryList.map((tags, index) => (
						<Title title={tags} index={index} />
					))}
					<ul>
						{resources.map((tags, index) => (
							<Resources
								url={tags.url}
								title={tags.title}
								linkname={tags.category}
								index={index}
							/>
						))}
					</ul>
				</article>
			</main>
			<footer></footer>
		</>
	);
}
