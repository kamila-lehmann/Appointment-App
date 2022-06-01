import { FunctionComponent } from "react";
import Specialist, { SpecialistType } from "./Specialist";

const Results: FunctionComponent<{ specialists: SpecialistType[] }> = ({
  specialists,
}) => {
  return (
    <div>
      {specialists.map((specialist) => {
        return (
          <Specialist
            id={specialist.id}
            key={specialist.id}
            name={specialist.name}
            gender={specialist.gender}
            location={specialist.location}
            specialization={specialist.specialization}
            rating={specialist.rating}
            opinions={specialist.opinions}
          />
        );
      })}
    </div>
  );
};

export default Results;
