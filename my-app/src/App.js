import React, { Component, useState } from 'react';
import logo from './democracy.png';
import Dashboard from "./components/Dashboard";
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import { csv } from 'd3-request';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
      csv('./president_polls.csv', (error, data) => {
        if (error) {
          this.setState({loadError: true});
        }
        this.setState({
          data: data.map(d => ({...d, x: d.end_date, y: Number(d.pct)}))
        });
      })
    }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <ScrollAnimation animateIn='fadeIn'>
        <img src={logo} className="App-logo" alt="logo" />
        </ScrollAnimation>
        <p>
          Zahnae Aquino, Sheel Patel, Dani Lopez || Winter 2020 || Twitter Sentiment Analysis Project
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1aIQDjzH8T6ln5CwGbcpYMV02yeKZtR1Qs4gifmkDhnc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milestone 1
        </a>
        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1aIQDjzH8T6ln5CwGbcpYMV02yeKZtR1Qs4gifmkDhnc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milestone 2
        </a>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Final Report
        </a>
              <br></br> The following dashboard compares the public sentiment of presidential candidates (via Twitter) with public poll data.
      </header>
      <Dashboard />

<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      Public Poll Source:
      <a
        className="App-link"
        href="https://fivethirtyeight.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        fivethirtyeight.com
      </a>

    </div>
    );
  }
}

export default App;
