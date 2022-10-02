import * as React from "react";

const Event = (props) => {
  let startTime = new Date(props.startTime);
  let endTime = props.endTime !== null ? new Date(props.endTime) : null;

  return (
    <div className="bg-violet-200 dark:bg-violet-300 rounded-lg my-4 p-2 transition duration-300 ease-out transform hover:scale-102">
      <div class="flex h-3 w-3 mb-1">
        <span class={`animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 ${props.started ? "visible" : "hidden"}`}></span>
        <span class={`relative inline-flex rounded-full h-3 w-3 ${props.started ? "bg-green-300" : "bg-gray-400 dark:bg-gray-500"}`}></span>
      </div>
      <div className="text-white">
        <p className="text-2xl">{ props.name }</p>
        <p className="text-xl">{ getTimeString(startTime, endTime) }</p>
      </div>
    </div>
  )
}

const getTimeString = (start, end) => {
  let startDay = start.toDateString().split(" ").slice(1).join(" ");
  let startTime = start.toLocaleTimeString("en-us", {timeZoneName:"short"})

  let str = startDay
  str += " " + startTime

  if (end != null) {
    let endDay = end.toDateString().split(" ").slice(1).join(" ")
    let endTime = end.toLocaleTimeString("en-us", {timeZoneName:"short"})

    str += " - "

    if (startDay !== endDay) {
      str += endDay + " "
    }
    str += endTime
  }

  return str
}

export default Event;
