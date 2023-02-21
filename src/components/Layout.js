import Navigation from "./Navigation";
import Resources from "./Resources";
import Title from "./Title";

export default function Layout({
	categoryList,
	selectedTab,
	setSelectedTab,
	filter,
	setTabIndex,
	tabIndex,
}) {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
				<ul>
					{categoryList.map((cat, index) => (
						<Navigation
							cat={cat}
							index={index}
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
							tabIndex={tabIndex}
							setTabIndex={setTabIndex}
						/>
					))}
				</ul>
			</nav>
			<main>
				<article>
					<Title title={selectedTab} />
					<ul>
						{filter.map((tags, index) => (
							<Resources url={tags.url} linkname={tags.title} key={index} />
						))}
					</ul>
				</article>
			</main>
			<footer></footer>
		</>
	);
}
