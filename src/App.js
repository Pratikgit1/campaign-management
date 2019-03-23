import React, { Component } from "react";
import Header from "./components/header/header";
import History from "./components/history/history";
import Campaigns from "./components/campaigns/campaigns";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.campaignNames = ["SMS", "Facebook", "Twitter", "YouTube", "Google"];
    this.userNames = ["Arijit Patra", "Cool Name", "Happy", "Siri", "Alexa"];
    this.sampleComment = [
      "Lorem Ipsum is not simply random text but simply timepass text lol",
      "simply dummy text of the printing",
      "Awesome",
      "Great Job",
      "baan gaya mera campaign of the year"
    ];
    this.state = {
      addNew: true,
      selectedId: 0,
      data: [
        {
          id: 1,
          name: "Emails",
          createdAt: "2:30 pm",
          createdBy: "Chirag",
          isRenamed: false,
          isPaused: false,
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
    };
  }

  onNewClick = x => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: this.campaignNames[
            Math.floor(Math.random() * this.campaignNames.length)
          ],
          createdAt: "2:30 pm",
          createdBy: this.userNames[
            Math.floor(Math.random() * this.userNames.length)
          ],
          isRenamed: false,
          isPaused: false,
          previousName: "",
          activity: [
            {
              code: 0,
              type: "created",
              activityBy: this.userNames[
                Math.floor(Math.random() * this.userNames.length)
              ],
              dateTime: new Date()
            }
          ]
        }
      ]
    });
  };

  updatedData = data => {
    this.setState({ data });
  };

  onResume = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].isPaused = false;
    dataCopy[id - 1].activity.push({
      code: 4,
      type: "resume",
      activityBy: this.userNames[
        Math.floor(Math.random() * this.userNames.length)
      ],
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
      activityBy: this.userNames[
        Math.floor(Math.random() * this.userNames.length)
      ],
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onComment = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[id - 1].activity.push({
      code: 2,
      type: "comment",
      comment: this.sampleComment[
        Math.floor(Math.random() * this.sampleComment.length)
      ],
      activityBy: this.userNames[
        Math.floor(Math.random() * this.userNames.length)
      ],
      dateTime: new Date()
    });
    this.setState({ data: dataCopy });
  };

  onRename = id => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    const oldName = dataCopy[id - 1].name;
    dataCopy[id - 1].name = this.campaignNames[
      Math.floor(Math.random() * this.campaignNames.length)
    ];
    dataCopy[id - 1].isRenamed = true;
    dataCopy[id - 1].activity.push({
      code: 3,
      type: "rename",
      name: dataCopy[id - 1].name,
      previousName: oldName,
      activityBy: this.userNames[
        Math.floor(Math.random() * this.userNames.length)
      ],
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

  selectedItem = id => {
    this.setState({ selectedId: id });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Header createNew={this.onNewClick} />
          </div>
        </div>

        <div className="row">
          <div className="col-8 l-scoller">
            <Campaigns
              addNew={this.state.addNew}
              data={this.state.data}
              updatedData={this.updatedData}
              onComment={this.onComment}
              onResume={this.onResume}
              onDelete={this.onDelete}
              onPause={this.onPause}
              onRename={this.onRename}
              selectedItem={this.selectedItem}
            />
          </div>
          <div className="col-4 l-history">
            <History
              data={this.state.data}
              selectedId={this.state.selectedId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
