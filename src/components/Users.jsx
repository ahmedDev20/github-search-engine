import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import SearchUsers from "./SearchUsers";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      totalUsers: 0,
    };
    console.log("Constructor phase");
  }

  componentDidMount() {
    this.getUsers();
    console.log("Mounted phase");
  }

  getUsers = () => {
    axios.get("https://api.github.com/users").then((res) => {
      this.setState({
        users: res.data,
        totalUsers: res.data.length,
      });
    });
  };

  searchUsersFromGitHub = (data) => {
    if (data !== "") {
      axios.get(`https://api.github.com/search/users?q=${data}`).then((res) => {
        this.setState({ users: res.data.items });
      });
    }
  };

  render() {
    console.log("Rendred phase");
    return (
      <div>
        <div className="row my-2">
          <div className="col-md-12">
            <SearchUsers getUserSearch={this.searchUsersFromGitHub} />
          </div>
        </div>
        <div className="row">
          {this.state.users.map((user) => (
            <div className="col-md-4" key={user.id}>
              <User user={user} Item={false} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
