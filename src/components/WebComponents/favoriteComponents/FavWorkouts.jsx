import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Spinner from "../../Spinner";
import swal from "sweetalert";

// this component is gathering all of the necessary data from the database and displaying it for the user to see and interact with. Particularly, it's getting all of the workout programs the user has favorited. All of the functions are named appropriately, so take a look. User still has the ability to delete the workout program, select it as their current program, or un-favorite it.

function FavWorkouts() {
  const [data, setData] = useState();
  const GetWorkouts = async () => {
    let user = +localStorage.getItem("user");
    let res = await axios.get("/favoriteworkout", { params: { user: user } });
    setData(res.data["0"]);
    console.log("res:", res);
    console.log("data:", data);
  };
  useEffect(() => {
    GetWorkouts();
  }, []);

  const removeProgram = async (id) => {
    swal(
      "Remove from Favorites?",
      "This action will remove this workout from your favorite tab.",
      "warning",
      { buttons: true, dangerMode: true }
    ).then((value) => {
      if (value) {
        let user = localStorage.getItem("user");
        axios
          .delete("/removeFavoriteWorkout", { params: { user: user, id: id } })
          .then((res) => window.location.reload(true));
      }
    });
  };

  const selectCurrent = async (id, name) => {
    let user = +localStorage.getItem("user");
    swal(
      `Do you want to select ${name}?`,
      "Your app will begin to track this workout program.",
      "warning",
      { buttons: true }
    ).then((value) => {
      if (value) {
        const body = {
          id,
          user,
        };
        axios.post("/currentworkout", body);
        window.location = "/dashboard/current";
      }
    });
  };

  const deleteProgram = (id, name) => {
    swal(
      `Deleting ${name}`,
      "This action will delete this program, and cannot be undone.",
      "warning",
      { buttons: true, dangerMode: true }
    ).then((value) => {
      if (value) {
        axios
          .delete("/deleteWorkout", { data: { id: id } })
          .then((res) => console.log(res.data));
        window.location.reload(true);
      }
    });
  };

  const Display = () => {
    if (data === undefined) {
      return <Spinner />;
    } else {
      const workoutCards = data.map((element, index) => {
        return (
          <div key={index} element={element} className="custom-workout-card">
            <h2>{element.name}</h2>
            <div className="custom-info-container">
              <div>
                <h3>
                  Length: {Object.keys(JSON.parse(element.data)).length} week(s)
                </h3>
                <h3>ID: {element.id}</h3>
              </div>
              <div>
                <i
                  className="bx bxs-trash"
                  style={{ color: "red", fontSize: 36 }}
                  onClick={() => deleteProgram(element.id, element.name)}
                ></i>
                <i
                  class="bx bx-minus-circle"
                  style={{ color: "#FFA620", fontSize: 36 }}
                  onClick={() => removeProgram(element.id)}
                ></i>
                <i
                  className="bx bx-check-square"
                  style={{ color: "green", fontSize: 36 }}
                  onClick={() => selectCurrent(element.id, element.name)}
                ></i>
              </div>
            </div>
          </div>
        );
      });
      return workoutCards;
    }
  };

  return (
    <div className="all-custom-container">
      <Display />
    </div>
  );
}

export default FavWorkouts;
