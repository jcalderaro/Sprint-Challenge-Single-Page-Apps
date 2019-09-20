import { Link } from "react-router-dom";


import React, {useState, useEffect} from "react";

import CharacterList from "./CharacterList";

// function SearchForm() {
 
//   return (
//     <section className="search-form">
//       <Link to="/" className="home-button">Home</Link>
//       <Link to="/characters/:id" className="character-button">Characters</Link>
//      <h1>form page</h1>
//     </section>
//   );
// }

//|WHAAAt




const SearchForm = (props) => {

  const characters = [  
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
  "Abadango Cluster Princess",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails",
  "Albert Einstein",
  "Alexander",
  "Alien Googah",
  "Alien Morty",
  "Alien Rick",
  "Amish Cyborg",
  "Annie",
  "Antenna Morty",
  "Antenna Rick",
  "Ants in my Eyes Johnson"
];

  const [searchTerm, setSearchTerm] = useState("");
  
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


    return(

        <div className="formik-form">
 <section className="search-form">
 <Link to="/" className="home-button">Home</Link>
  <Link to="/characters/:id" className="character-button">Characters</Link>
  <h1>Search Form!</h1>
</section>
       
        <form>
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
            
        </div>
    )
}



export default SearchForm;