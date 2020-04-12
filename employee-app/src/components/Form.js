import React from 'react';
import './form.css';

function Form(props) {
    
    return (
        <div class="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input class="form-control"
                value={props.firstName}
                name="firstName"
                onChange={props.handleInputChange}
                type="text"
                placeholder="First Name"
            />
            <label forHtml="sort">Sort Employees By Ascending or Descending Birth Month</label>
            <select 
            onChange={props.handleSelectChange}
            id="sort">
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    )
}
export default Form;