import { React } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddFriendList from "./componet/addFriend/addFriendList";
import MyFrientList from "./componet/myFriend/myFriendList";
import NavBar from "./componet/navbar";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

function App() {
  return (
    <BrowserRouter>
      {/* <header>
        <script>console.log("asdfasdf");</script>
      </header> */}
      <main>
        {/* Top navigation bar */}
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              JamChat
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <div class="navButton">
                <Button variant="text" color="inherit">
                  <p>Main</p>
                </Button>
                <Button variant="text" color="inherit">
                  <p>Add Friend</p>
                </Button>
              </div>
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="body-content">
          <Routes>
            <Route path="/friend-list" element={<MyFrientList />} />
            <Route path="/home" element={<MyFrientList />} />
            <Route path="/" element={<MyFrientList />} />

            {/* <Route path="/getUsers/:userID?" element={<AddFriendList />} /> */}
            <Route path="/getUsers" element={<AddFriendList />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
