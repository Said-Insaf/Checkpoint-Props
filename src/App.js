import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import photoprofil from "./assets/photoprofil.jpg";

function App() {
  const handleName = (fullname) => {
    alert(`My name is  ${fullname}`);
  };

  return (
    <div className="App">
      <img
        src="./Instago.jpg"
        alt=""
        className="Instago"
        style={{ width: "100%" }}
      ></img>
      <Profile
        handleName={handleName}
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
      <img
        src="./Instagram.jpg"
        alt=""
        className="Instagram"
        style={{ width: "100%" }}
      ></img>
    </div>
  );
}

export default App;
