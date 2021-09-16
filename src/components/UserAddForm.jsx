import React from 'react';
import './UserAddForm.css';

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
            <div className="form-style">
            <form onSubmit={(eventDetails) => this.handleSubmit(eventDetails)}>
            <p className="text-center h3">Add a user to the list</p>
                <div className="form-details">
                    <div className="form-col1">
                        <label htmlFor="name">Name  </label>
                        <input 
                            type="text" 
                            id="name" 
                            onChange={(eventDetails) => this.handleNameChange(eventDetails)}
                            value={this.state.name}
                        />

                        <label htmlFor="email">Email  </label>
                        <input 
                            type="email" 
                            id="email" 
                            onChange={(eventDetails) => this.handleEmailChange(eventDetails)}
                            value={this.state.email}
                        />

                        <label htmlFor="salary">Salary  </label>
                        <input 
                            type="number" 
                            id="salary" 
                            onChange={(eventDetails) => this.handleSalaryChange(eventDetails)}
                            value={this.state.salary}
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">User Gold</label>
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault" 
                                onChange={(eventDetails) => this.handleIsGoldClientChange(eventDetails)}
                                checked={this.state.isGoldClient}/>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-primary mt-2" type="submit">Add User</button>
            </form>
            </div>
        );
    }
}


   

export default UserAddForm;