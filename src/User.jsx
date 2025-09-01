import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []   // state instead of useState
    };
  }

  // method to fetch data
  get_Data = () => {
    axios.get("https://dummyjson.com/products")
      .then((resp) => {
        this.setState({ users: resp.data.products });  // API returns products array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  componentDidMount() {
    // load data when component mounts
    this.get_Data();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>User Components</h3>
            <table className="table table-bordered border border-3 solid border-dark">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Id</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
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
  }
}

export default User;
