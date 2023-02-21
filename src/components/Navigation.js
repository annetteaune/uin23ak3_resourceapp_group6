export default function Navigation({ categoryList }) {
	return (
		<ul>
			{categoryList.map((cat, index) => {
				return (
					<li key={index}>
						{" "}
						<a href={"/"}> {cat} </a>{" "}
					</li>
				);
			})}
		</ul>
	);
}
