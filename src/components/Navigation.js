export default function Navigation({ cat, index }) {
	return (
		<li key={index}>
			{" "}
			<a href={"/"}> {cat} </a>
		</li>
	);
}
