import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Autocomplete from './autocomplete';
function setup() {
	let props = {
		onClick: () => {},
		style: { color: 'grey' },
		dropdownStyle: { backgroundColor: 'grey' },
		valuesStyle: { color: 'pink' },
		values: [1, 2, 3, 4, 5, 6]
	};
	return shallow(<Autocomplete {...props} />);
}
it('', () => {
	const wrapper = setup();
	expect(wrapper.state().displayedValues).toEqual([1, 2, 3, 4, 5, 6]);
	expect(wrapper.state().displayValues).toEqual(false);
	expect(wrapper.props().style.color).toEqual('grey');
});
