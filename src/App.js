import Home from "./pageCompo/Home";
import About from "./pageCompo/About";
import Product from "./pageCompo/Product";
import Users from "./pageCompo/Users";
import Navbar from "./pageCompo/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Notfound from "./pageCompo/Notfound";
import UserProfile from "./pageCompo/UserProfile";
import SearchUser from "./pageCompo/SearchUser";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Navbar />}>
        
          <Route exact path="/" element={<Home />} />
    
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/search" element={<SearchUser/>}/>
          <Route path="/users/user/:username" element={<UserProfile />}/>
        </Route>
        <Route path="/*"element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
