import React from 'react';

export default function ValueDisplay(props) {
	if (props.displayValues) {
		debugger;
		let style = {
			position: 'absolute',
			zIndex: '600',
			height: '300px',
			width: '400px',
			overflow: 'scroll',
			color: 'black',
			backgroundColor: 'green',
			borderBottomLeftRadius: '10px',
			borderBottomRightRadius: '10px',
			...props.downdownStyle,
		};
		let valuesDisplay = {
			padding: '4px',
			boxSizing: 'border-box',
			...props.valuesStyle,
		};

		return (
			<div name="languagesdisplay" className="languagesdisplay-container" style={style}>
				{props.displayedValues.map((value, i) => {
					return (
						<p
							className="languagesdisplay-item"
							style={valuesDisplay}
							onClick={props.onClick}
							name={value}
							key={value + i}
						>
							{value}
						</p>
					);
				})}
			</div>
		);
	} else {
		return <div />;
	}
}
