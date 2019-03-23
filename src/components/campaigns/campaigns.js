import React, { Component } from "react";
import "./campaigns.scss";

class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      addNew: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return {
        data: nextProps.data
      };
    } else return null;
  }

  render() {
    return (
      <div className="row">
        {this.state.data.map(x => (
          <div
            key={x.id}
            className="col-12 pt-2 pb-2"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #a1a1a1"
            }}
          >
            <div className="col-8">
              <div>
                Campaign {x.id} - {x.name}
              </div>
              <div>Created at {x.createdAt}</div>
            </div>

            <div className="col-4">
              {x.isPaused === false ? (
                <i
                  className="fa fa-pause-circle-o mr-5"
                  title="Pause"
                  aria-hidden="true"
                  onClick={() => this.props.onPause(x.id)}
                />
              ) : (
                <i
                  className="fa fa-play-circle-o mr-5"
                  title="Resume"
                  aria-hidden="true"
                  onClick={() => this.props.onResume(x.id)}
                />
              )}
              <i
                className="fa fa-comments-o mr-5"
                title="Comment"
                aria-hidden="true"
                onClick={() => this.props.onComment(x.id)}
              />
              <i
                className="fa fa-pencil mr-5"
                title="Rename"
                aria-hidden="true"
                onClick={() => this.props.onRename(x.id)}
              />
              <i
                className="fa fa-trash"
                title="Delete"
                aria-hidden="true"
                onClick={() => this.props.onDelete(x.id)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Campaigns;
