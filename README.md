# AutoComplete-React-Component
A simple react component that displays a list of values, of which you can filter via an input and select by clicking the value or pressing enter to choose the first displayed value.
## Install
```
npm install autocomplete-react-component@latest
```

## Example Useage


```
import React from 'react';
import Autocomplete from 'autocomplete-react-component';
export default class UsingAutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languagesArray: ['JavaScript', 'Java', 'Python'],
		};
	}

	selectedLanguageHandler = clickedValue => {
		console.log(clickedValue);
		// JavaScript
		// Example Output, if clicked Language: JavaScript
	};
	render() {
		return (
			<AutoComplete
				style={{ color: 'grey' }}
				dropdownStyle={{ backgroundColor: 'grey' }}
				valuesStyle={{ color: 'pink' }}
				values={this.state.languagesArray}
				onClick={this.selectedLanguageHandler}
			/>
		);
	}
}
```

## Example Output
![Gif](https://im3.ezgif.com/tmp/ezgif-3-6e1739121e.gif)

        
