import './UserTable.css'
import { useState, useEffect } from 'react';
const UserTable = (props) => {

    const [users, setUsers] = useState();

    useEffect(() =>{
        fetch('http://localhost:8080/usuarios')
        .then((response) => response.json())
        .then((data) =>{
          console.log(data.content)
          setUsers(data.content);
        });
      }, []);

    return(
          <table className='user-table'>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          {users ? users.map((user) =>(
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          )) : []}
          </table>
    )
}

export default UserTable