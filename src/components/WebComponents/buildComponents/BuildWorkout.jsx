import axios from "axios";
import React, { useState } from "react";
import Week from "./Week";

// This was easily the hardest component tree to build. The main problem was how do we allow users to input as much data as they please, without restriction, and without having to build out an absolutely gigantic databse with 30+ tables. This whole component tree will slowly build an object from the bottom, to the top, as the user submits each day and week.

// BuildWorkout >> Week >> DaysOfWeek >> Day

function BuildWorkout() {
  const [userInput, setUserInput] = useState(0);
  const [days, setDays] = useState(1);
  const [isActive, setActive] = useState("false");
  const maxWeeks = 24;

  let name = "";
  let newData = {};

  const changeName = (e) => (name = e.target.value);

  const eventHandler = (data) => (newData[`${data.name}`] = data);

  // We want a limit to X amount of weeks. This small function will always have at least one week, at most X weeks, or whatever the user inputs. It will then render the Week component that amount of times.
  function RenderWeeks() {
    const fields = [];
    if (days > maxWeeks) {
      for (let i = 1; i <= 24; i++) {
        fields.push(
          <Week id={i} key={i} weekNum={i} onChange={eventHandler} />
        );
      }
    } else if (!days) {
      fields.push(<Week id={1} key={1} weekNum={1} onChange={eventHandler} />);
    } else {
      for (let i = 1; i <= days; i++) {
        fields.push(
          <Week id={i} key={i} weekNum={i} onChange={eventHandler} />
        );
      }
    }

    return fields;
  }
  const daysHandler = (e) => (e ? setUserInput(e) : setUserInput(1));

  function buttonClick() {
    setDays(userInput);
    RenderWeeks();
    setActive(!isActive);
  }

  //this function will pull user data from local storage and use it to build the final object that we wish to send to the database for safekeeping.
  function saveWorkout() {
    let id = +localStorage.getItem("user");
    let workout = {
      name: name,
      data: newData,
      id: id,
    };
    axios.post("/workouts", workout).then((res) => console.log(res.data));
    window.location = "/dashboard/programs/custom";
  }
  return (
    <div id="build-workout-page">
      <h1 id="page-title">Build Program</h1>
      <p>
        Be warned, this page does NOT save your data if you navigate away from
        it during a build. Please have an idea of what program you want to
        design, then come here and build it.
      </p>
      <input
        type="text"
        min="4"
        max="75"
        placeholder="Name of Program"
        onChange={(e) => changeName(e)}
      />
      <div className="button-container" style={{ alignSelf: "center" }}>
        <button style={{ alignSelf: "center" }} onClick={buttonClick}>
          Restart
        </button>
      </div>
      <div
        className="workout-input-container"
        id={`${isActive ? "" : "hide-workout"}`}
      >
        <h2>How many weeks?</h2>
        <p>(Max of {maxWeeks} weeks)</p>
        <input
          type="number"
          min="1"
          max={maxWeeks}
          onChange={(e) => daysHandler(e.target.value)}
        />
        <button onClick={buttonClick}>Create</button>
      </div>
      <div id="week-container">
        <RenderWeeks />
        <button onClick={saveWorkout} id="save-btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default BuildWorkout;
