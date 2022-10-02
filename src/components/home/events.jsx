import React, { Component } from "react";
import Axios from "axios";
import Event from "./event";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isError: false,
    };
  }

  async componentDidMount() {
    Axios.get("https://api.scriptkitties.ca/events")
      .then(result => {
        console.log(result.data);
        this.setState({ events: result.data });
      })
      .catch(err => {
        this.setState({ isError: true });
      });
  }

  render() {
    const { events } = this.state;

    return (
      <div
        className="mb-10 w-7/8 md:w-3/4 xl:w-1/2 mx-auto"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {events.slice(0, 3).map(item => {
          return (
            <Event
              name={ item.name }
              startTime={ item.start_time }
              endTime={ item.end_time }
              started={ item.started }
            />
          )
        })}
      </div>
    )
  }
}


export default Events;
