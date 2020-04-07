import React from 'react';
import InfoCategoryRow from './InfoCategoryRow';
import InfoRow from './InfoRow';

class DisplayedEmpInfo extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.totalEmpInfo.forEach((empInfo) => {
        if (empInfo.category !== lastCategory) {
            rows.push(
                <InfoCategoryRow
                category={empInfo.category}
                key={empInfo.category}/>
            );
        }
        rows.push(
        <InfoRow 
        empInfo={empInfo}
        key={empInfo.name}/>
        );
        lastCategory = empInfo.category;
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


export default DisplayedEmpInfo;