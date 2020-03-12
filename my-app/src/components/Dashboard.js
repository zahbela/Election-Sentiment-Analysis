import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import chartIcon from "../chart-icon.svg";
import { Bernie, Joe, Elizabeth, Tulsi, Mike, quarterLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
        bernie: Bernie,
        joe: Joe,
        elizabeth: Elizabeth,
        tulsi: Tulsi,
        mike: Mike,
        labels: quarterLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
  //      const isAnnual = value === "annual";

  //      const newData = isAnnual ? managerData : managerQuarterData;
    //    const newLabels = isAnnual ? yearLabels : quarterLabels;
      //  const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;

  //      this.setState({
    //        data: newData,
      //      average: newAverage,
        //    labels: newLabels
    //    })
    }

    render() {
        const { bernie, joe, elizabeth, tulsi, mike, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Sentiment Dashboard</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button
                        value="annual"
                        onClick={this.handleButtonClick}
                    >
                        Twitter
                    </button>

                    <button
                        value="lastquarter"
                        onClick={this.handleButtonClick}
                    >
                        Public Polls
                    </button>
                </div>

                <LineGraph
                    bernie = {bernie}
                    elizabeth = {elizabeth}
                    mike = {mike}
                    tulsi = {tulsi}
                    joe = {joe}
                    labels={labels} />

            </div>
        )
    }
}
