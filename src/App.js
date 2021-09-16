import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList'
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#F0FAFF',
      textColor: 'black',
      users: [],
      posts: [],
      displayUsers: true
    };
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(userList => {
      console.log(userList);

      const filteredUsers = userList.filter((user) => user.id <= 3)

      this.setState({users: filteredUsers});
    })
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postList => {
      const filteredPosts = postList.filter((posts) => posts.id <= 5)
      this.setState({posts: filteredPosts})
    })

  }

 

  changeColor(event) {
    console.log(event.target.value);
    this.setState({background: event.target.value});
  }

  changeTextColor(event) {
    console.log(event.target.value);
    this.setState({textColor: event.target.value});
  }

  updateUsers(newUser) {
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          newUser
        ]
      }
    })

  }

  clickUserButton () {
    this.setState({displayUsers : true})
    console.log(this.setState.displayUsers)
  }

  clickPostButton () {
    this.setState({displayUsers : false})
    console.log(this.setState.displayUsers)
  }

  deleteUser(id) {
    const filteredUsers = this.state.users.filter( (user) => {return user.id !== id});

    this.setState(
     { users: filteredUsers}
    );
  }


  render() {
    return(

      <div className="app font-link" 
      style={{
        background: this.state.background, 
        color: this.state.textColor
      }}>
        <div className="choose">
          <p className="text-center h3" >Choose the color for your pleasure</p>
          <div className="color">
            <div className="change-color">
              <label htmlFor="background-color">Background color</label>
              <input type="color" id="background-color" onChange={(event) => this.changeColor(event)}/>
            </div>
            <div className="change-color">
              <label htmlFor="text-color">Text color</label>
              <input type="color" id="text-color" onChange={(event) => this.changeTextColor(event)}/>
            </div>
          </div>
        </div>

        <div className="choose">
          <UserAddForm updateUsers={(user) => this.updateUsers(user)}/>
        </div>

        <div className="choose">
          <p className="text-center h3">Choose what you want to display</p>
          <div className="show-buttons">
            <button type="button" className="btn btn-outline-primary" onClick={() => this.clickUserButton()}>Show Users</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => this.clickPostButton()}>Show Posts</button>
          </div>
        </div>

        
        {
          this.state.displayUsers
            ? <UserList users={this.state.users} deleteUser={(id) =>  this.deleteUser(id)}/> 
            : <PostList posts={this.state.posts}/>
        }
        
        
      </div>
    );
  }
}

export default App;
