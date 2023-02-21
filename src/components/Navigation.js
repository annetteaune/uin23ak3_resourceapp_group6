import { Link } from "react-router-dom";
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
			{/* Hadde problemer med at pathen ble nested, fant løsning her: 
			https://stackoverflow.com/questions/54803285/prevent-nested-link-component-from-inheriting-path-from-previous-link-rea */}
			<Link to={`/${cat}`}>{cat}</Link>
		</li>
	);
}
