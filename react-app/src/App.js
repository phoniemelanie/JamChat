import { React } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddFriendList from "./componet/addFriend/addFriendList";
import MyFrientList from "./componet/myFriend/myFriendList";

function App() {
  return (
    <BrowserRouter>
      {/* put nav bar here */}
      <main>
        <Routes>
          <Route path="/friend-list" element={<MyFrientList />} />
          <Route path="/home" element={<MyFrientList />} />
          <Route path="/" element={<MyFrientList />} />

          <Route path="/addUser/:userID?" element={<AddFriendList />} />
          <Route path="/addUser" element={<AddFriendList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
