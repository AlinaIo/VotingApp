import React, { Component } from "react";
import { connect } from "react-redux";
import { VotingActions } from "../Actions";
import "./VotingCounter.css";

class VotingCounter extends Component {
  state = {
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timeInterval: {}
  };
  componentWillMount() {
    this.initializeClock(this.props.endDate);
  }
  getTimeRemaining(endtime) {
    var t = Date.parse(new Date(endtime)) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  updateClock(endtime) {
    var t = this.getTimeRemaining(endtime);

    VotingActions.finished(t);

    this.setState({
      total: t.total,
      days: t.days,
      hours: ("0" + t.hours).slice(-2),
      minutes: ("0" + t.minutes).slice(-2),
      seconds: ("0" + t.seconds).slice(-2)
    });

    if (t.total <= 0) {
      clearInterval(this.state.timeinterval);
      this.setState({
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    }
  }
  initializeClock(endtime) {
    this.updateClock(endtime);
    this.setState({
      timeinterval: setInterval(this.updateClock.bind(this, endtime), 1000)
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.total === 0 ? "The voting has ended" : "Voting ends"}
        </h1>
        <div id="clockdiv">
          <div>
            <span className="days">{this.state.days}</span>
            <div className="smalltext">Days</div>
          </div>
          <div>
            <span className="hours">{this.state.hours}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes">{this.state.minutes}</span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds">{this.state.seconds}</span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export { VotingCounter };
