import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import female from "./assets/woman.jpg";
import male from "./assets/male.jpg";

export interface SpecialistType {
  name: string;
  id: number;
  location: string;
  specialization: string;
  gender: string;
  rating: number;
  opinions: string[];
}

const Specialist: FunctionComponent<SpecialistType> = (props) => {
  const { id, name, location, specialization, gender } = props;
  return (
    <Link to={`/specialist/${id}`}>
      <div>
        <img src={gender === "female" ? female : male} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{specialization}</h3>
        <h4>{location}</h4>
      </div>
    </Link>
  );
};

export default Specialist;
