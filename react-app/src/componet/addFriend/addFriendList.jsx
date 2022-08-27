import React from "react";
import axios from "axios";

import FriendCard from "./addFriendCard";
import { display } from "@mui/system";

const addFriendList = (props) => {
  //TODO: GET data using axsio, and store them into a variable
  const data = [];

  return (
    <div>
      {/* TODO: Map data into FriendCard */}

      {data.map((user) => {
        // display the user data in each friend card
        <FriendCard
          avatar={user.avatar}
          userName={user.name}
          userID={user._id}
        />;
      })}
    </div>
  );
};

export default addFriendList;
