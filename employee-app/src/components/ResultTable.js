import React from 'react';
import moment from 'moment';



function ResultTable(props) {
    let filteredArr = props.results.filter(result => {
        return result.name.first.includes(props.firstName) 
 
     })
    let resultsArr = filteredArr.length >0 ? filteredArr : props.results;
    
    return (
        <div>
                <table class="table">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                    {resultsArr.map(result => (
                    <tr>
                        <td><img src={result.picture.large}/></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.email}</td>
                        
                        <td>{moment(result.dob.date).format('MMMM Do YYYY')}</td>
                    </tr>
                     ))}
                </table>
         
        </div>
    );
}

export default ResultTable;