import React from 'react';
import Form from './Form';
import API from '../utils/API';
import ResultTable from './ResultTable';

class SearchResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ``,
            results: []
        };
    }

    //When this component mounts search the API for employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees(){
        API.search()
        .then(res => {
            this.setState({ results: res.data.results})
            console.log(res);
        })
        .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
    //When the form is submitted, search the employees API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target.value)
    };
    render() {
        return (
            <div>
                <Form
                    firstName={this.state.firstName}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />
              <ResultTable results={this.state.results} search={this.state.search}/>      
            </div>
        );
    }
}
export default SearchResultContainer;