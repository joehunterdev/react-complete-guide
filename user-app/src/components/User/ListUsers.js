import React from "react";
import UserItem from "./UserItem";

const ListUsers = (props) => {
 
        return (
               <ul>
                 {props.users.map((user) => (
                 <UserItem
                  key={user.key}
                  user={user.user}
                  age={user.age}/>))
                 }
               </ul>
          );

}

export default ListUsers;
