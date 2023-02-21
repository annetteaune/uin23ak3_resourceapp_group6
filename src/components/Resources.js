export default function Resources({ linkname, url, index}) {
	return (
		<li key={index}>
			<a href={url}>{linkname}</a>
		</li>
	);
}
