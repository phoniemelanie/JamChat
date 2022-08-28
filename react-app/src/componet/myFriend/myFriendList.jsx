import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import FriendCard from "./friendCard";

const MyFriendList = (props) => {
  const [userData, setState] = useState([]);

  useEffect(() => {
    const sendPost = async () => {
      const { data: userData } = await axios.post(
        "http://localhost:8000/getUsers"
      ); // Backend API: getUsers/
      return userData;
    };
    const userDataPromise = sendPost();
    userDataPromise.then((userData) => {
      console.log("userdata: ", userData);
      setState(userData);
    });
  }, []);

  return (
    <Fragment>
      {userData.map((user) => {
        // display the user data in each friend card
        return <FriendCard key={user._id} userData={user} />;
      })}
    </Fragment>
  );
};

export default MyFriendList;
