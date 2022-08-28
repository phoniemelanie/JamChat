import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

import AddFriendCard from "./addFriendCard";
import { display } from "@mui/system";
import { useEffect } from "react";
import { getListSubheaderUtilityClass } from "@mui/material";
// import { Button } from "bootstrap";

const AddFriendList = (props) => {
  //TODO: GET data using axsio, and store them into a variable
  // const data = [];
  console.log("AddFriendList");

  const [userData, setState] = useState([]);

  useEffect(() => {
    const sendPost = async () => {
      const { data: userData } = await axios.post("http://localhost:8000/data"); // Backend API: getUsers/
      return userData;
    };
    const userDataPromise = sendPost();
    userDataPromise.then((userData) => {
      console.log("userdata: ", userData);
      setState(userData);
    });
  }, []);

  // http://appName/getUsers/
  // require backend API function to return an object with data array that stores all users' data
  // each user data contains: avatar, name, _id(default by mongo db)

  return (
    <Fragment>
      <div>
        {userData.map((user) => {
          // display the user data in each friend card
          return <AddFriendCard key={user._id} userData={user} />;
        })}
      </div>

      <div>
        <Link to="/home">
          <Button variant="outlined">Back to Main Page</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default AddFriendList;
