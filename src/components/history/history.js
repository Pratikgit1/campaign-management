import React, { Component } from "react";
import "./history.scss";

class History extends Component {
  getType = code => {
    let type;
    switch (code) {
      case 0:
        type = "created";
        break;
      case 1:
        type = "pause";
        break;
      case 2:
        type = "comment";
        break;
      case 3:
        type = "renamed";
        break;
      case 4:
        type = "resume";
        break;
    }
    return type;
  };

  getBody = data => {
    let body;
    switch (data.code) {
      case 0:
        body = `Campaign created by ${
          this.props.data[this.props.selectedId - 1].createdBy
        }`;
        break;
      case 1:
        body = "pause";
        break;
      case 2:
        body = "comment";
        break;
      case 3:
        body = "renamed";
        break;
      case 4:
        body = "resume";
        break;
    }
    return body;
  };

  render() {
    return (
      <div>
        <i className="fa fa-history mr-2" aria-hidden="true" /> History
        <ul className="timeline">
          {this.props.selectedId > 0
            ? this.props.data[this.props.selectedId - 1].activity.map(x => (
                <li className="timeline-inverted">
                  <div className={"timeline-badge " + this.getType(x.code)}>
                    <i className="fa fa-play-circle-o" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-body">
                      <p>{this.getBody(x)}</p>
                    </div>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    );
  }
}

export default History;
