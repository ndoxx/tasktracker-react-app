import React from 'react';

interface IButtonProps {
	caption: string,
	color: string,
	onClick: () => void
}

const Button = (props: IButtonProps): JSX.Element => {
	return (
		<button 
			className='btn' 
			style={{backgroundColor: props.color}}
			onClick={props.onClick}
			>{props.caption}</button>
	);
}

Button.defaultProps = {
	color: 'steelBlue'
};

export default Button;