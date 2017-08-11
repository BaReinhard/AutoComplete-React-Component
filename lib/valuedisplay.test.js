import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import ValueDisplay from './valuedisplay';
function setup() {
	let props = {
		onClick: function(event) {
			return event.target.innerText;
		},
		dropdownStyle: { backgroundColor: 'grey' },
		displayValues: true,
		displayedValues: [1, 2, 3, 4, 5, 6]
	};
	return shallow(<ValueDisplay {...props} />);
}
it('Testing Value Display Pop Up', () => {
	let fakeEvent = {
		target: {
			innerText: 1
		}
	};
	let fakeEvent2 = {
		target: {
			innerText: 2
		}
	};
	let fake;
	let wrapper = setup();
	//let spy = expect.spyOn(wrapper.props().children[0].props, 'onClick');
	// console.log(wrapper.props().children[0].props.onClick(fakeEvent));
	expect(wrapper.props().children[0].props.onClick(fakeEvent)).toEqual(1);
	expect(wrapper.props().children[0].props.children).toBe(1);
	expect(wrapper.props().children[1].props.onClick(fakeEvent2)).toEqual(2);

	//console.log(wrapper.props());
	expect(wrapper.props().children[0].props.name).toBe(1);
	expect(wrapper.props().children.length).toBe(6);
	expect(wrapper.props().className).toBe('valuedisplay-container');
	expect(wrapper.props().children[0]);
	//expect(wrapper.props().children[0].calls.length).toEqual(1);
});
