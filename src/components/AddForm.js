import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, setError } from '../actions'

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        console.log("Submitting...")
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            props.setError("Please provide a name, position, and nickname.")
        } else {
            console.log("Adding Smurf...")
            props.addSmurf(state)
            console.log(props.smurfs);
        }
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
            }
            <button onClick={handleSubmit}>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf, setError })(AddForm);

//Task List:
//[COMPLETE] 1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//[COMPLETE] 2. Replace all instances of the errorMessage static variable with your error message state value. 
//[COMPLETE] 3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//[COMPLETE] 4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.