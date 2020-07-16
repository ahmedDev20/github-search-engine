import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class User extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    const isItem = this.props.Item;
    return (
      <div>
        <div className="card mb-3">
          <img className="card-img-top" src={avatar_url} alt="" />
          <div className="card-body">
            <h4 className="card-title">{login}</h4>
            <p className="card-text">
              {isItem ? (
                <a
                  href={html_url}
                  target="_blank"
                  className="btn btn-success m-3"
                >
                  VISIT PROFIL
                </a>
              ) : (
                <Link to={`/users/${login}`} className="btn btn-success m-3">
                  READ MORE
                </Link>
              )}
              <a
                href={`https://github.com/${login}?tab=repositories`}
                className="btn btn-warning"
                target="_blank"
              >
                View repositories
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
