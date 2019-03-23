import React, { Component } from "react";
import "./history.scss";

class History extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-history mr-2" aria-hidden="true" /> History
        {this.props.data.map(x =>
          x.activity.map(y => (
            <div>
              {y.code}
              {y.type}
              {y.comment}
              {y.activityBy}
              {/* {y.dateTime.toDateString()} */}
            </div>
          ))
        )}
      </div>
    );
  }
}

export default History;
