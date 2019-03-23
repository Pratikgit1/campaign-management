import React, { Component } from "react";
import Header from "./components/header/header";
import History from "./components/history/history";
import Campaigns from "./components/campaigns/campaigns";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      addNew: ""
    };
  }

  onNewClick = x => {
    this.setState({ addNew: x });
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
            <Campaigns addNew={this.state.addNew} />
          </div>
          <div className="col-4 bg-warning">
            <History />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
