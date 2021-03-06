import {mount} from "Enzyme";
import {findByTestAttr} from "../test/testUtils";
import App from './App';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
import {getSecretWord as mockGetSecretWord} from './actions'

/**
 *Setup function for App component
 * @return {shallowWrapper}
 */

const setup=()=>{
  // use mount, because useEffect not called on shallow
  return mount(<App/>);
}

test('renders without error', () => {
  const wrapper=setup();
  const appComponent=findByTestAttr(wrapper,'app-component');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word',()=>{
  beforeEach(()=>{
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('getSecretWord on app mount',()=>{
    const wrapper=setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update',()=>{
    const wrapper=setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})