import {shallow} from "Enzyme";
import {findByTestAttr} from "../test/testUtils";
import App from './App';

/**
 *Setup function for App component
 * @return {shallowWrapper}
 */

const setup=()=>{
  return shallow(<App/>);
}

test('renders without error', () => {
  const wrapper=setup();
  const appComponent=findByTestAttr(wrapper,'app-component');
  expect(appComponent).toHaveLength(1);
});
