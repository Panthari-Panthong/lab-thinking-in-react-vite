import React from "react";

const SearchBar = ({ inputsName, setInputsName }) => {
  const handleChange = (event) => {
    setInputsName(event.target.value);
  };

  return (
    <form>
      <label>
        Search
        <input
          type="text"
          value={inputsName}
          name="name"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default SearchBar;
