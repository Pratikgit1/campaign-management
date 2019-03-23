import React, { Component } from "react";
import "./history.scss";

class History extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-history mr-2" aria-hidden="true" /> History
        {this.props.selectedId > 0
          ? this.props.data[this.props.selectedId - 1].activity.map(x => (
              <div>
                {x.code}
                {x.type}
                {x.comment}
                {x.activityBy}
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default History;
