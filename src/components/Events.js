import React, { useContext } from "react";

import Event from "./Event";
import AppContext from "../contexts/AppContext";

const Events = ({ state, dispatch }) => {
  return (
    <React.Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Events;
