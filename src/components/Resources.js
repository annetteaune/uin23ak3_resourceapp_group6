export default function Resources({ resources }) {
    console.log(resources)
	return (
        resources.map((cat, index) => {
            <li key={index}>
                <a href={cat.url}>{cat.title}</a>
            </li>
        })
    )
}
