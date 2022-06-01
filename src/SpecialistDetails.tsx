import { Component } from "react";
import { useParams } from "react-router-dom";
import specialistsList from "./data/specialistsList";
import female from "./assets/woman.jpg";
import male from "./assets/male.jpg";

class SpecialistDetails extends Component<{ params: { id: string } }> {
  state = {
    name: "",
    gender: "",
    location: "",
    specialization: "",
    rating: 0,
    opinions: [] as string[],
  };

  componentDidMount() {
    const id = parseInt(this.props.params.id);
    if (id > 0) {
      this.setState(Object.assign(specialistsList[id - 1]));
    }
  }

  render() {
    const { name, location, gender, specialization, rating, opinions } =
      this.state;

    return (
      <div>
        <h2>{name}</h2>
        <img src={gender === "female" ? female : male} alt={name} />
        <h3>{`${specialization} - ${location}`}</h3>
        <h4>Rating: {rating}</h4>
        <h4>Opinions:</h4>
        <ul>
          {opinions.map((opinion) => {
            return <li key={opinion}>{opinion}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams<{ id: string }>();

  return <SpecialistDetails params={params} />;
};

export default WrappedDetails;
