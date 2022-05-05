import React, { Fragment, useState, useEffect } from "react";

const MainUseEffectv2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromURL();
  }, []);

  const getDataFromURL = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    //console.log(users);
    setData(users);
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <h1>Use Effect v2</h1>
        <p>
          Loading data with useEffect from:
          https://jsonplaceholder.typicode.com/users
        </p>
      </div>
      <ul className="container mt-5">
        {data.map((user) => {
          return (
            <li key={user.id}>
              id: {user.id} | {user.name} | {user.email}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default MainUseEffectv2;
