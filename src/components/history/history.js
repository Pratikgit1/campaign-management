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
      default:
        type = "";
        break;
    }
    return type;
  };

  getBody = (data, id) => {
    let body;
    switch (data.code) {
      case 0:
        body = `Campaign created by ${this.getDataObject(id)[0].createdBy}`;
        break;
      case 1:
        body = `Campaign paused by ${data.activityBy}`;
        break;
      case 2:
        body = `Comment added by ${data.activityBy} "${data.comment}"`;
        break;
      case 3:
        body = `Campaign renamed by ${data.activityBy} from ${
          data.previousName
        } to ${data.name}`;
        break;
      case 4:
        body = `Campaign resumed by ${data.activityBy}`;
        break;
      default:
        body = "";
        break;
    }
    return body;
  };

  getIcon = code => {
    let icon;
    switch (code) {
      case 0:
        icon = "fa-plus";
        break;
      case 1:
        icon = "fa-pause-circle-o";
        break;
      case 2:
        icon = "fa-comments-o";
        break;
      case 3:
        icon = "fa-pencil";
        break;
      case 4:
        icon = "fa-play-circle-o";
        break;
      default:
        icon = "";
        break;
    }
    return icon;
  };

  getName = id => {
    let data = this.props.data.filter(x => {
      if (x.id === id) {
        return x;
      }
    });
    return data[0].name;
  };

  getDataObject = id => {
    let data = this.props.data.filter(x => {
      if (x.id === id) {
        return x;
      }
    });
    return data;
  };

  render() {
    return (
      <div className="l-align-history pt-4">
        <i className="fa fa-history mr-2 text-muted" aria-hidden="true" />{" "}
        <b className="text-muted">History</b>
        <div className="pt-2 pb-3">
          {this.props.selectedId === 0 ? (
            <span className="text-muted g-no-selection">
              No campaigns selected.
            </span>
          ) : (
            ""
          )}
          <b>
            {this.props.selectedId > 0
              ? "Campaign " +
                this.props.selectedId +
                " - " +
                this.getName(this.props.selectedId)
              : ""}
          </b>
        </div>
        <div className="l-scroll-history">
          <ul className="timeline mt-3">
            {this.props.selectedId > 0
              ? this.getDataObject(this.props.selectedId)[0].activity.map(
                  (item, index) => (
                    <li
                      className="timeline-inverted"
                      key={item.code + index * 3 + index * 2 + index}
                    >
                      <div
                        className={"timeline-badge " + this.getType(item.code)}
                      >
                        <i className={"fa " + this.getIcon(item.code)} />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-body">
                          <p>{this.getBody(item, this.props.selectedId)}</p>
                        </div>
                      </div>
                    </li>
                  )
                )
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default History;
