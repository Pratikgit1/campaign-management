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
        {this.state.data.length === 0 ? (
          <h6 className="text-muted p-3 g-no-selection">No campaigns here.</h6>
        ) : (
          ""
        )}
        {this.state.data.map((x, index) => (
          <div
            key={x.id}
            id={"campaign" + x.id}
            onClick={() => this.props.handleSelection(x.id)}
            className="col-12 pt-2 pb-2 l-items p-3 g-cursor-pointer"
          >
            <div className="col-1">
              <div className="l-numbering">{index + 1}</div>
            </div>
            <div className="col-7 l-info">
              <div>
                <b>
                  Campaign {x.id} - {x.name}
                </b>
              </div>
              <div>
                <small>Created at {x.createdAt}</small>
              </div>
            </div>

            <div className="col-4 text-center">
              {x.isPaused === false ? (
                <i
                  className="fa fa-pause-circle-o mr-5 g-fs-18"
                  title="Pause"
                  aria-hidden="true"
                  onClick={() => this.props.onPause(x.id)}
                />
              ) : (
                <i
                  className="fa fa-play-circle-o mr-5 g-fs-18"
                  title="Resume"
                  aria-hidden="true"
                  onClick={() => this.props.onResume(x.id)}
                />
              )}
              <i
                className="fa fa-comments-o mr-5 g-fs-18"
                title="Comment"
                aria-hidden="true"
                onClick={() => this.props.onComment(x.id)}
              />
              <i
                className="fa fa-pencil mr-5 g-fs-18"
                title="Rename"
                aria-hidden="true"
                onClick={() => this.props.onRename(x.id)}
              />
              <i
                className="fa fa-trash g-fs-18"
                title="Delete"
                aria-hidden="true"
                onClick={e => this.props.onDelete(e, x.id)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Campaigns;
