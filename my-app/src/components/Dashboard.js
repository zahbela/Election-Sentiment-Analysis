import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import chartIcon from "../chart-icon.svg";
import {  Bernie, Joe, Elizabeth, BernieSent, ElizabethSent, JoeSent, quarterLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
      bernie: Bernie,
      joe: Joe,
      elizabeth: Elizabeth,
      berniesent: BernieSent,
      elizabethsent: ElizabethSent,
      joesent: JoeSent,
      labels: quarterLabels
    }

    handleButtonClick = e => {
        const { value } = e.target;
        const isTwitter = value === "twitter";

        const newBernie = isTwitter ? Bernie : BernieSent;
        const newElizabeth = isTwitter ? Elizabeth : ElizabethSent;
        const newJoe = isTwitter ? Joe : JoeSent;

       this.setState({
            bernie: newBernie,
            joe: newJoe,
            elizabeth: newElizabeth
        })
    }

    render() {
        const { bernie, joe, elizabeth, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Sentiment Dashboard</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button
                        value="twitter"
                        onClick={this.handleButtonClick}
                    >
                        Twitter
                    </button>

                    <button
                        value="nottwitter"
                        onClick={this.handleButtonClick}
                    >
                        Public Poll
                    </button>
                </div>

                <LineGraph
                    bernie = {bernie}
                    elizabeth = {elizabeth}
                    joe = {joe}
            //        elizabethsent = {elizabethsent}
              //      joesent = {joesent}
                //    berniesent = {berniesent}
                    labels={labels} />

            </div>
        )
    }
}
