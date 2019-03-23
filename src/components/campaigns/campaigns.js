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
          createdBy: "Chirag"
        },
        {
          id: 2,
          name: "Push notification",
          createdAt: "2:30 pm",
          createdBy: "Chirag"
        },
        {
          id: 3,
          name: "InApp Messages",
          createdAt: "2:30 pm",
          createdBy: "Chirag"
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
          createdBy: "Chirag"
        }
      ]
    });
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
              <i className="fa fa-pause-circle-o mr-5" aria-hidden="true" />
              <i className="fa fa-comments-o mr-5" aria-hidden="true" />
              <i className="fa fa-pencil mr-5" aria-hidden="true" />
              <i className="fa fa-trash" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Campaigns;
