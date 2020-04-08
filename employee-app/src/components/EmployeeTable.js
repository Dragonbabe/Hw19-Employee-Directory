import React from 'react';

class EmployeeTable extends React.Component {
    render() {
        const rows = [];
        this.props.totalEmpInfo.forEach((employee) => {
        rows.push(
            <tr>
            <td>{employee.name}</td>
            <td>{employee.dob}</td>
            <td>{employee.email}</td>
        </tr>
        );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


export default EmployeeTable;