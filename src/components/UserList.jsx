import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.users.map((user, index) => {
                        return (
                        <UserItem 
                        key={index}
                        image={user.image}
                        name={user.name} 
                        email={user.email} 
                        salary={user.salary}
                        isGoldClient={user.isGoldClient}
                        deleteButton={user.deleteButton}
                        />
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList;