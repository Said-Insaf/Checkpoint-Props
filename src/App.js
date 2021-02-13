import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import photoprofil from "./assets/photoprofil.jpg";
function App() {
  return (
    <div className="App">
      <Profile
        fullname={"Insaf SAID"}
        bio={"Développement web"}
        profession={"Student"}
      >
        <img
          src={photoprofil}
          alt="users"
          className=""
          style={{ width: "50%" }}
        />
      </Profile>
    </div>
  );
}

export default App;
