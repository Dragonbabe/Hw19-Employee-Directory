import React from 'react';
import ResultTable from './ResultTable';
import './form.css';

function Form(props) {


    //Each input must have a 'value', a 'name' and an 'onChange' prop     
    return (
        <div class="form-group">
            <form className="form-inline" className="form">
                <label htmlFor="firstName">First Name:</label>
                <input class="form-control"
                    value={props.firstName}
                    name="firstName"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                {/* <label htmlFor="lastName">Last Name:</label>
                <input class="form-control"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <label htmlFor="DOB">Date of Birth:</label>
                <input class="form-control"
                    value={this.state.DOB}
                    name="DOB"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Date of Birth"
                />
                <button onSubmit={this.handleFormSubmit} className="btn btn-primary mt-3">
                    Search!
                    </button> */}

            </form>
        </div>
    )




}
export default Form;