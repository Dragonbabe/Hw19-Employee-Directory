import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        //setting the component's intial state to 'empty'
        this.state = {
            //see. Empty
            firstName: '',
            lastName: '',
            DOB: '',
            
        };
    }
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        const lName = event.target.lName;
        const dob = event.target.dob;
 //update the input's state
        this.setState({
            [name]: value,
            [lName]: value,
            [dob]: value
    
        });
    };
    handleFormSubmit = event => {
        //prevent default behavior of refreshing the page
        event.preventDefault();
        alert(`Hello ${this.state.firstName} ${this.state.lastName} ${this.state.DOB}`);

        this.setState({
            firstName: '',
            lastName: '',
            DOB: ''
        });
    };
    render() {
        //Each input must have a 'value', a 'name' and an 'onChange' prop     
        return (
            <div>
                <p>
                    Hello {this.state.firstName} {this.state.lName} {this.state.DOB}
                </p>
                <form className="form-inline" action="/action_page.php" className="form" onSubmit={this.handleFormSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                    value={this.state.lastName}
                    lName="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <label htmlFor="DOB">Date of Birth:</label>
                    <input
                    value={this.state.DOB}
                    dob="DOB"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Date of Birth"
                    />

                </form>
            </div>
        )
    }
    
   
    
}
export default Form;