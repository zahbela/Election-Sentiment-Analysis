import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "./LineGraph";
import chartIcon from "../chart-icon.svg";
import {  Bernie, Joe, Trump, BernieSent, TrumpSent, JoeSent, quarterLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
      poll: Bernie,
      sentiment: Bernie,
      labels: quarterLabels
    }

    handleBernButtonClick = e => {
        const { value } = e.target;

       this.setState({
            poll: Bernie,
            sentiment: BernieSent
        })
    }

    handleJoeButtonClick = e => {
      const { value } = e.target;

      this.setState({
          poll: Joe,
          sentiment: JoeSent
      })
    }

    handleTrumpButtonClick = e => {
        const { value } = e.target;

       this.setState({
            poll: Trump,
            sentiment: TrumpSent
        })
    }

    render() {
        const {poll, sentiment, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>Sentiment Dashboard</h1>
                </header>

                <div className={classes.buttonContainer}>
                    <button
                        value="bernie"
                        onClick={this.handleBernButtonClick}
                    >
                        Sanders
                    </button>

                        <button
                            value="joe"
                            onClick={this.handleJoeButtonClick}
                        >
                            Biden
                        </button>

                    <button
                        value="trump"
                        onClick={this.handleTrumpButtonClick}
                    >
                        Trump
                    </button>
                </div>


                <LineGraph
                    poll = {poll}
                    sentiment = {sentiment}
                    labels = {labels} />

            </div>
        )
    }
}
