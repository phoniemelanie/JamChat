import React, { Fragment, useState } from "react";
import axios from "axios";

import AddFriendCard from "./addFriendCard";
import { display } from "@mui/system";
import { useEffect } from "react";

const AddFriendList = (props) => {
  //TODO: GET data using axsio, and store them into a variable
  // const data = [];

  const [userData, setState] = useState([]);

  useEffect(() => {
    const sendPost = async () => {
      const { data: userData } = await axios.get("http://appName/getUsers/"); // Backend API: getUsers/
      return userData;
    };

    const userData = sendPost();
    setState(userData);
  }, []);

  // http://appName/getUsers/
  // require backend API function to return an object with data array that stores all users' data
  // each user data contains: avatar, name, _id(default by mongo db)

  return (
    <Fragment>
      {/* TODO: Map data into AddFriendCard */}

      {userData.map((user) => {
        // display the user data in each friend card
        <AddFriendCard
          userData={user}
          // avatar={user.avatar}
          // userName={user.name}
          // userID={user._id}
        />;
      })}
    </Fragment>
  );
};

export default AddFriendList;
