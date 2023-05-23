// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    userPfp: 'https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg',
    name: 'John Doe',
    username: 'johndoe',
    password: 'password123',
    bio: 'This is an example of user bio/ user description.',
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="*" element={<h1 style={{paddingTop: 100}}>PAGE NOT FOUND!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
