import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const userVal = await fetch(url);
    const data = await userVal.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((eachUser) => {
          console.log(eachUser);
          const { id, login, avatar_url, html_url } = eachUser;
          return (
            <li key={id}>
              <img src={avatar_url} alt="avatar" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
