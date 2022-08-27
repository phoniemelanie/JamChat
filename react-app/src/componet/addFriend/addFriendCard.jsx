import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
  Avatar,
  IconButton,
  CardMedia,
  Icon,
} from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
// import { AudioCard } from 'material-ui-player';

import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShareIcon from "@mui/icons-material/Share";

const AddFriendCard = (userData) => {

  const handleAddUser = (event) => {
    event.preventDefault();

    // read in the userID instead
    // const userID = "testing1234";

    //  change this post part to axios
    userData.title = "UPDATED";

    // all property
    // axios.put(apiEndpoint + "/" + userData.id, userData);
    // partial property
    axios.patch(apiEndpoint + "/" + user._id, { title: userData.title });
  };

  return (
    <Card
      variant="outlined"
      style={{ width: 300, height: 50, marginTop: 3, marginLeft: 3 }}
    >
      {/* <CardHeader avatar={<Avatar>D</Avatar>}
          title='Card Header'
          subheader='Card sub heading'/> */}

      {/* <CardContent className="row-display ">
  
          
        </CardContent> */}

      <div className="row-display">
        <div className="row-display userinfo-display">
          <Avatar sx={{ width: 30, height: 30 }}>
            {/* replace this with the image of avatar stored in db */}
            <p>userData.avatar</p>
          </Avatar>
          <Typography className="single-item-flex-middlize" variant="par">
            {/* use the userName instead */}
            {/* Hello World */}
            {userData.name}
          </Typography>
        </div>

        <CardActions>
          <Button onClick={handleAddUser}>
            <PersonAddIcon fontSize="small" />
          </Button>
          {/* <Link to={`/addUser/${userID}`}>
            </Link> */}
        </CardActions>
      </div>
    </Card>

    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
  );
};

export default AddFriendCard;

// Music player:
{
  /* <Card variant = "outlined" style={{width: 600, height: 200, marginLeft: 20, marginTop:10}}>
  <CardHeader avatar={<Avatar>D</Avatar>}
    title='Card Header'
    subheader='Card sub heading'/>
  
  <CardMedia></CardMedia>
  
  <CardContent>
    <Typography variant='h3'>Hello World</Typography>
  </CardContent>
  
  <CardActions>
    <Button><AddIcon /></Button>
    <Button><PersonAddIcon /></Button>
  
    <Button><ShareIcon /></Button>
  
  </CardActions>
  </Card> */
}
