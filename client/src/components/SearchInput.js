import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ value, onChange, searchResults }) {
  return (
    <div>
      <input type="search" value={value} onChange={onChange} />
      <div>
        {searchResults.map((searchResult) => (
          <div key={searchResult}>{searchResult}</div>
        ))}
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  searchResults: PropTypes.array,
};

export default SearchInput;
