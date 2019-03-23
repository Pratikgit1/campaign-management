import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  createNew = () => {
    this.props.createNew(true);
  };
  render() {
    return (
      <div className="row">
        <div className="col-12 l-header">
          <i className="fa fa-envelope mr-2" aria-hidden="true" />{" "}
          <b>All Campaigns</b>
        </div>

        <div className="col-12 p-3 l-section-end">
          <i className="fa fa-bars mr-2 text-muted" aria-hidden="true" />{" "}
          <b className="text-muted">Campaign List</b>
          <button
            className="ml-4 bg-primary p-2 text-white pl-3 pr-3 border-0"
            onClick={this.createNew}
          >
            {" "}
            + Create new
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
