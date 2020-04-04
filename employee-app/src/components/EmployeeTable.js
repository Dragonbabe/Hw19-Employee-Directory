import React from 'react';

function EmployeeTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bob</td>
                    <td>Jones</td>
                    <td>id: 1</td>  
                </tr>
                <tr>
                    <td>Georgia</td>
                    <td>Evans</td>
                    <td>id: 2</td>

                </tr>
            </tbody>
        </table>
    )
}
export default EmployeeTable;