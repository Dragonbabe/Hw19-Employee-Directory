import React from 'react';
class InfoRow extends React.Component {
    render () {
        const empInfo = this.props.empInfo;
        //info is supposed to be the info about the employee displayed in a row. Also if employee is currently employed
        const name = empInfo.employed ?
        //there will be a name listed for each employee
        empInfo.name :
        //change the color of the name displayed
        <span style={{color: 'blue'}}>
            {empInfo.name}
        </span>
        //there will also be a dob and an email listed along with name
        return (
            <tr>
            
                <td>{name}</td>
                <td>{empInfo.dob}</td>
                <td>{empInfo.email}</td>
            </tr>
        );
    }
}

export default InfoRow;