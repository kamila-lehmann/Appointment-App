import { FunctionComponent, useState } from "react";
import specializationsList from "./data/specializationsList";
import specialistsList from "./data/specialistsList";
import Results from "./Results";
import { SpecialistType } from "./Specialist";

const SearchForm: FunctionComponent = () => {
  const [specialization, setSpecialization] = useState("");
  const [location, setLocation] = useState("");
  const [specialists, setSpecialists] = useState([] as SpecialistType[]);

  function matchSpecialists() {
    const matchingSpecialists = [];
    for (let i = 0; i < specialistsList.length; i++) {
      if (location === "") {
        if (specialistsList[i].specialization === specialization) {
          matchingSpecialists.push(specialistsList[i]);
        }
      } else if (specialization === "") {
        if (
          specialistsList[i].location.toUpperCase() === location.toUpperCase()
        ) {
          matchingSpecialists.push(specialistsList[i]);
        }
      } else if (
        specialistsList[i].location.toUpperCase() === location.toUpperCase() &&
        specialistsList[i].specialization === specialization
      ) {
        matchingSpecialists.push(specialistsList[i]);
      }
    }
    return setSpecialists(matchingSpecialists);
  }

  return (
    <div>
      <h2 className="short-desc">
        Find specialists and make appointments in few easy steps
      </h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            matchSpecialists();
          }}
        >
          <label htmlFor="search_by_specialization">
            Select a specialization:
          </label>
          <select
            id="search_by_specialization"
            name="search_by_specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            onBlur={(e) => setSpecialization(e.target.value)}
          >
            <option></option>
            {specializationsList.sort().map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>

          <label htmlFor="search_by_location">Search by location:</label>
          <input
            autoComplete="off"
            type="text"
            id="search_by_location"
            name="search_by_location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn-search" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              style={{ fill: "#000000" }}
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>
      <Results specialists={specialists} />
    </div>
  );
};

export default SearchForm;
