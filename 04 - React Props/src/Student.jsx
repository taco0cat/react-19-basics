// propTypes and defaultProps have been deleted from React 19
// Typescript and JS Destructuring are preferred now

// import PropTypes from 'prop-types'

// Default props passed as args according to newer React 19
function Student({ name = "Guest", age = 0, isStudent = false }){

    return (
        <>
            <div className="student">
                {/* props.key_name */}
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Student: {isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    );
}

export default Student