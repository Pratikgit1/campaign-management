import React, { Component } from "react";
import "./campaigns.scss";

class Campaigns extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Emails",
          createdAt: "2:30 pm",
          createdBy: "Chirag",
          isRenamed: false,
          isPaused: false,
          previousName: "",
          activity: [
            {
              code: 0,
              type: "created",
              activityBy: "userName",
              dateTime: new Date()
            }
          ]
        },
        {
          id: 2,
          name: "Push notification",
          createdAt: "2:30 pm",
          createdBy: "Chirag",
          isRenamed: false,
          isPaused: false,
          previousName: "",
          activity: [
            {
              code: 0,
              type: "created",
              activityBy: "userName",
              dateTime: new Date()
            }
          ]
        },
        {
          id: 3,
          name: "InApp Messages",
          createdAt: "2:30 pm",
          createdBy: "Chirag",
          isRenamed: false,
          isPaused: false,
          previousName: "",
          activity: [
            {
              code: 0,
              type: "created",
              activityBy: "userName",
              dateTime: new Date()
            }
          ]
        }
      ],
      initial: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: "InApp Messages",
          createdAt: "2:30 pm",
          createdBy: "Chirag",
          isRenamed: false,
          isPaused: false,
          previousName: "",
          activity: [
            {
              code: 0,
              type: "created",
              activityBy: "userName",
              dateTime: new Date()
            }
          ]
        }
      ]
    });
  }

  onResume = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].isPaused = false;
    dataCopy[id - 1].activity.push({
      code: 5,
      type: "resume",
      activityBy: "userName",
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onPause = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].isPaused = true;
    dataCopy[id - 1].activity.push({
      code: 1,
      type: "pause",
      activityBy: "userName",
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onComment = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].activity.push({
      code: 2,
      type: "comment",
      comment: "this is a sample comment",
      activityBy: "userName",
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onRename = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].previousName = dataCopy[id - 1].name;
    dataCopy[id - 1].name = "Rename";
    dataCopy[id - 1].isRenamed = true;
    dataCopy[id - 1].activity.push({
      code: 3,
      type: "rename",
      activityBy: "userName",
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onDelete = id => {
    this.setState({
      data: this.state.data.filter(x => {
        if (x.id !== id) {
          return x;
        }
      })
    });
  };

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
                  onClick={() => this.onPause(x.id)}
                />
              ) : (
                <i
                  className="fa fa-play-circle-o mr-5"
                  title="Resume"
                  aria-hidden="true"
                  onClick={() => this.onResume(x.id)}
                />
              )}
              <i
                className="fa fa-comments-o mr-5"
                title="Comment"
                aria-hidden="true"
                onClick={() => this.onComment(x.id)}
              />
              <i
                className="fa fa-pencil mr-5"
                title="Rename"
                aria-hidden="true"
                onClick={() => this.onRename(x.id)}
              />
              <i
                className="fa fa-trash"
                title="Delete"
                aria-hidden="true"
                onClick={() => this.onDelete(x.id)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Campaigns;
