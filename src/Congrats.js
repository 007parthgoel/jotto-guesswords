/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props -react props
 * @return {JSX.Element} - Rendered component {or null if 'success' is false}
 */

export default (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations!!! you guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats"/>
        );
    }
}