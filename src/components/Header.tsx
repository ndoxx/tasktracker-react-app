import React from 'react';
import Button from './Button'
import { useLocation } from 'react-router-dom';

interface IHeaderProps {
	title: string,
	onAdd: () => void,
	addTaskShown: boolean
}

const Header = (props: IHeaderProps): JSX.Element => {
	/*
	// Inline CSS -> use for dynamic styling
	return (
		<header>
			<h1 style={headingStyle}>{props.title}</h1>
		</header>
	);
	*/

	// To be able to query current route
	const location = useLocation();

	// Do not show the Add button if we're not on the '/' route
	return (
		<header className='header'>
			<h1>{props.title}</h1>
			{ location.pathname === '/' && 
				<Button caption={props.addTaskShown ? 'Close' : 'Add'} 
						color={props.addTaskShown ? 'red' : 'green'} 
						onClick={props.onAdd} /> }
		</header>
	);
}

Header.defaultProps = {
	title: "Task Tracker"
}

/*
const headingStyle = {
	color: 'red',
	backgroundColor: 'black'
};
*/

export default Header;