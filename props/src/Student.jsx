import PropTypes from "prop-types"

const Student = (props) =>{
    return(
        <div className="student">
            <p>Name: {props.name}</p> 
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes = {
    Name: PropTypes.string,
    age: PropTypes.number,
    isStudent : PropTypes.bool
}

Student.defaultProps = {
    name:"Guest",
    age: null,
    isStudent: null
}

export default Student