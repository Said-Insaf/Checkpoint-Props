import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

// props = {
// fullname={"Insaf SAID"},
//         bio={"Développement web"},
//         profession={"Artiste Peintre"},
// }

const Profile = (props) => {
  return (
    <div>
      <img src={props.img} />
      <h2>{props.fullname}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.profession}</h2>

      <Button onClick={() => props.handleData(props.Profile.fullname)}>
        S'abbonner
      </Button>
    </div>
  );
};

Profile.defaultProps = {
  Profile: {
    fullname: "inconnu",
    image: "nthg",
    bio: "nthg",
    profession: "nthg",
  },
};
Profile.propTypes = {
  Profile: PropTypes.object,
};
export default Profile;

// const Profile = (props) => {
//   //   let Images = [
//   //     {
//   //       image:
//   //         "https://www.pexels.com/fr-fr/photo/photo-de-silhouette-de-femme-tenant-des-lumieres-3792581",

//   //       ,

//   //       Bio: "Developpement Web",

//   //       Profession: "Etudiante",
//   //     },
//   //   ];

//   //   const handleData = (FullName, Profession) => {
//   //     alert(`My name is ${FullName} I'm student  ${Profession}`);
//   //   };

//   return (
//     <div>
//       <h2>This my Card</h2>
//       <h3>{props.fullName}</h3>
//     </div>
//   );
// };
// export default Profile;
