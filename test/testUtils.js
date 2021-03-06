import checkPropTypes from 'check-prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props -react props
 * @return {ShalloWrapper}
 */
export const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps=(component, conformingProps)=>{
    const propError = checkPropTypes(component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}