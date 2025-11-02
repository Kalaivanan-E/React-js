import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]); // state

  // method to fetch data
  const get_Data = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((resp) => {
        setUsers(resp.data.products); // API returns products array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // load data when component mounts
  useEffect(() => {
    get_Data();
  }, []); // empty dependency → runs only once when mounted

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>User Components</h3>
          <table className="table table-bordered border border-3 solid border-dark">
            <thead className="bg-dark text-white">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.category}</td>
                  <td>{user.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
