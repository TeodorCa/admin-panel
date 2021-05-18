import React from 'react';

class UserAddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            salary: '',
            isGoldClient: false
        } 
    } 

handleNameChange(eventDetails) {
    const value = eventDetails.target.value;
    this.setState({name: value})
}

handleEmailChange(eventDetails) {
    const value = eventDetails.target.value;
    this.setState({email: value})
}

handleSalaryChange(eventDetails) {
    const value = eventDetails.target.value;
    this.setState({salary: value})
}

handleIsGoldClientChange(eventDetails) {
    const value = eventDetails.target.checked;
    this.setState({isGoldClient: value})
}

handleSubmit(eventDetails) {
    eventDetails.preventDefault();

    const user = {
        name: this.state.name,
        email: this.state.email,
        salary: this.state.salary,
        isGoldClient: this.state.isGoldClient
    }
    this.props.updateUsers(user);
}



  render() {
      console.log(this.state)
        return (
            <form onSubmit={(eventDetails) => this.handleSubmit(eventDetails)}>
                <label htmlFor="name">Name : </label>
                <input 
                    type="text" 
                    id="name" 
                    onChange={(eventDetails) => this.handleNameChange(eventDetails)}
                    value={this.state.name}
                />
                <label htmlFor="email">Email : </label>
                <input 
                    type="email" 
                    id="email" 
                    onChange={(eventDetails) => this.handleEmailChange(eventDetails)}
                    value={this.state.email}
                />
                                <label htmlFor="salary">Salary : </label>
                <input 
                    type="number" 
                    id="salary" 
                    onChange={(eventDetails) => this.handleSalaryChange(eventDetails)}
                    value={this.state.salary}
                />
                <label htmlFor="client-gold">Client Gold</label>
                <input 
                    type="checkbox" 
                    id="client-gold"
                    onChange={(eventDetails) => this.handleIsGoldClientChange(eventDetails)}
                    checked={this.state.isGoldClient}
                />

                <input type="submit" value="Adauga user"/>
            </form>
        );
    }
}


   

export default UserAddForm;