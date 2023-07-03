// import { useState } from 'react';
import User from './User';
import { Component } from 'react';
import classes from './Users.module.css';



class  Users extends Component {
  constructor(){
    super();
     this.state = {showUsers:true,more:'Test'};

  }
  // const [showUsers, setShowUsers] = useState(true);

  toggleUsersHandler = () => {
    // setShowUsers((curState) => !curState);
    this.setState((curState)=> {
      return {showUsers:!curState.showUsers}
    
    }) ; 
  };
 
  render(){ 
    
   console.log(this.props.users);
   console.log(this.showUsers);

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
   
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );

  }

 

};

export default Users;
