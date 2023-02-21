export default function Navigation({ categoryList }) {
	return (
		<ul>
			{categoryList.map((cat, index) => {
				return <li> {cat}</li>;
			})}
		</ul>
	);
}
