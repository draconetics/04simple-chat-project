import * as React from 'react';
import { shallow } from 'enzyme';
// import { create, ReactTestRenderer } from 'react-test-renderer';
import CheckBox from '../components/CheckBox';

let wrapper;
// let snapshot: ReactTestRenderer;
beforeEach(() => {
  const checkbox = React.createElement(CheckBox, { labelOn: 'On', labelOff: 'Off' });
  wrapper = shallow(checkbox);
  // snapshot = create(checkbox);
});
describe('<CheckBox />', () => {
  test('it matches the snapshot', () => {
    // expect(snapshot.toJSON()).toMatchSnapshot();
  });
  it('should toggle checkbox label after click event', () => {
    expect(wrapper.text()).toEqual('Off');
    wrapper.find('input').simulate('change');
    expect(wrapper.text()).toEqual('On');
  });
});
// # sourceMappingURL=CheckBosx.test.js.map
