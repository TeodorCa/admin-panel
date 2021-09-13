import React from 'react';
import UserItem from './UserItem';
import './UserList.css'

class UserList extends React.Component {
    render() {
        const deleteUser = this.props.deleteUser;
        return (
            <div className="d-flex container flex-column ">
                <div className="d-flex justify-content-between fedssd">
                    <p className="w-25 text-center h5">User name</p>
                    <p className="w-25 text-center h5">Salary</p>
                    <p className="w-25 text-center h5">User status</p>
                    <p className="w-25 text-center h5">Action</p>

                </div>
                <div className="user-list">
                    {
                        this.props.users.map((user, index) => {
                            return (
                            <UserItem 
                            id={user.id}
                            key={index}
                            image={user.image}
                            name={user.name} 
                            email={user.email} 
                            salary={user.salary}
                            deleteUser={deleteUser}
                            isGoldClient={user.isGoldClient}
                            deleteButton={user.deleteButton}
                            />
                            )
                        })
                    }
                </div>
        </div>
        )
    }
}

export default UserList;