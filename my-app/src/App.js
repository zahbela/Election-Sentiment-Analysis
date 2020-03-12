import React, { Component } from 'react';
import logo from './democracy.png';
import Dashboard from "./components/Dashboard";
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';

class App extends Component {
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
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Final Report
        </a>
      </header>
      <Dashboard />
    </div>
    );
  }
}

export default App;
