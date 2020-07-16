import React, { Component } from "react";

export default class SearchUsers extends Component {
  state = {
    search: "",
  };

  handleForm = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  searchUsers = (e) => {
    e.preventDefault();
    this.props.getUserSearch(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.searchUsers}>
        <div className="form-group">
          <input
            value={search}
            type="text"
            placeholder="Search user..."
            className="form-control"
            id="search"
            onChange={this.handleForm}
          />
        </div>
        <button className="btn btn-danger btn-block">Search</button>
      </form>
    );
  }
}
