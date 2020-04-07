import React from 'react';
import SearchBar from './SearchBar';
import DisplayedEmpInfo from './DisplayedEmpInfo';
class FilterableEmpTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <DisplayedEmpInfo totalEmpInfo={this.props.totalEmpInfo}/>
            </div>
        );
    }
}


export default FilterableEmpTable;