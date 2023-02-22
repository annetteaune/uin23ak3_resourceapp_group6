import Navigation from "./Navigation";
import Resources from "./Resources";
import Title from "./Title";

export default function Layout({
	categoryList,
	selectedTab,
	setSelectedTab,
	filter,
}) {
	return (
		<>
			<header>
				<h1>Ressursarkiv</h1>
			</header>
			<nav>
                {/* Mapper gjennom de unike kategoriene for opplisting av tabs, setter state */}
				<ul>
					{categoryList.map((cat, index) => (
						<Navigation
							cat={cat}
							key={index}
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
						/>
					))}
				</ul>
			</nav>
			<main>
				<article>
                    {/* Setter tittel basert på valgt kategori */}
					<Title title={selectedTab} />
					<ul>
                        {/* Mapper gjennom ressurser basert på filter av valgt kategori for
                            opplisting av linker */}
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
