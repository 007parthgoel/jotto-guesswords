/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props -react props
 * @return {ShalloWrapper}
 */
export const findBytestAttr=(wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`)
}