import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ValueDisplay from './autocomplete';
function setup() {
	let props = {
		onClick: () => {},
		dropdownStyle: { backgroundColor: 'grey' },
		displayValues: true,
		values: [1, 2, 3, 4, 5, 6]
	};
	return shallow(<ValueDisplay {...props} />);
}
it('', () => {
	const wrapper = setup();
	expect(wrapper.state().displayedValues).toEqual([1, 2, 3, 4, 5, 6]);
	expect(wrapper.state().displayValues).toEqual(false);
	expect(wrapper.props().style.color).toEqual('grey');
});
