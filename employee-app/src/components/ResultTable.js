import React from 'react';
import moment from 'moment';



function ResultTable(props) {


    return (
        <div>
            <table class="table">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {props.results.map(result => (
                    <tr>
                        <td><img src={result.picture.large} alt="person head shot" /></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.email}</td>
                        <td>{moment(result.dob.date).format('MM-DD-YYYY')}</td>
                    </tr>
                ))}
            </table>

        </div>
    );
}

export default ResultTable;