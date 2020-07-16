import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import { Link } from "react-router-dom";

export default class UserItem extends Component {
  state = {
    user: {},
  };
  componentWillMount() {
    const login = this.props.match.params.login;
    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    const { user } = this.state;
    const { name, followers, following, blog, public_repos } = this.state.user;
    return (
      <div className="row">
        <div className="col-md-4">
          <User user={user} Item={true} />
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center active">
              {name}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Followers
              <span className="badge badge-danger badge-pill">{followers}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center disabled">
              Following
              <span className="badge badge-danger badge-pill">{following}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center disabled">
              Public repositories
              <span className="badge badge-danger badge-pill">
                {public_repos}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ">
              Blog
              <a href={blog} target="_blank">
                {blog}
              </a>
            </li>
          </ul>
          <Link to="/" className="btn btn-primary mt-3">
            Go back
          </Link>
        </div>
      </div>
    );
  }
}
