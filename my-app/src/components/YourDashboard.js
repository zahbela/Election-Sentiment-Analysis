import React, { Component } from 'react';
import classes from "./YourDashboard.module.css";
import YourLineGraph from "./Dashboard1";
import chartIcon from "../chart-icon.svg";
import { Bernie, Joe, Trump, quarterLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
      bernie: Bernie,
      joe: Joe,
      trump: Trump,
  //    berniesent: BernieSent,
    //  trumpsent: ElizabethSent,
      //joesent: JoeSent,
      labels: quarterLabels
    }

    render() {
        const { bernie, joe, trump, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Sentiment Dashboard</h1>
                </header>

                <YourLineGraph
                    data={data}
                    labels={labels} />

            </div>
        )
    }
}
