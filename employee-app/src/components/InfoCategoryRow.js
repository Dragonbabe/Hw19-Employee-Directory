import React from 'react';
class InfoCategoryRow extends React.Component {
    render() {
    // there will ne a category row of info about the employee
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

export default InfoCategoryRow;