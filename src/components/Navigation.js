export default function Navigation({
	cat,
	index,
	setSelectedTab,
	setTabIndex,
	tabIndex
}) {
	return (
		<li
			key={index}
			onClick={() => {
				setSelectedTab(cat);
				setTabIndex(index);
			}}
			className={`${index === tabIndex ? "activetab" : "inactive"}`}
		>
			<a>{cat}</a>
		</li>
	);
}
