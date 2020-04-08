import React from 'react';
import SearchBar from './SearchBar';
import EmployeeTable from './EmployeeTable';
import employees from '../employees.json';
class FilterableEmpTable extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="search">Search for an employee by e-mail, name or dob</label>
                <input type="text" name="search" placeholder="Search...."/>  
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show current employees
                </p> 
            </form>
                <EmployeeTable totalEmpInfo={employees}/>
            </div>
        );
    }
}


export default FilterableEmpTable;