import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      <h2>{props.fullname}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.profession}</h2>
      <Button onClick={() => props.handleName("Insaf SAID")}>S'abbonner</Button>
      <br />
      <br />
      {props.children}
    </div>
  );
};

Profile.defaultProps = {
  fullname: "inconnu",
  bio: "nthg",
  profession: "nthg",
};
Profile.propTypes = {
  Profile: PropTypes.object,
};
export default Profile;
