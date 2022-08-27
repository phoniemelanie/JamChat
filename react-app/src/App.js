import { React } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FriendCard from "./componet/addFriendCard";

function App() {
  return (
    <BrowserRouter>
      {/* put nav bar here */}
      <main>
        <Routes>
          <Route path="/addUser/:userID?" element={<FriendCard />} />
          <Route path="/addUser" element={<FriendCard />} />
          <Route path="/" element={<FriendCard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
