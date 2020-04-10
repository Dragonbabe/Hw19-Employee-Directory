import React from 'react';



function ResultTable(props) {
    let filteredArr = props.results.filter(result => {
       return result.name.first.includes(props.search) || props.search === result.name.last

    })
    
    return (
        <div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                    {filteredArr.map(result => (
                    <tr>
                        <td><img src={result.picture.large}/></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.email}</td>
                        
                        <td>{result.dob.date}</td>
                    </tr>
                     ))}
                </table>
         
        </div>
    );
}

export default ResultTable;