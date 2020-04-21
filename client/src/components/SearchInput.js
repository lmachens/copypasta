import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ value, onChange, searchResults, onSelect }) {
  return (
    <div>
      <input type="search" value={value} onChange={onChange} />
      <div>
        {searchResults.map((searchResult) => (
          <div key={searchResult} onClick={() => onSelect(searchResult)}>
            {searchResult}
          </div>
        ))}
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  searchResults: PropTypes.array,
  onSelect: PropTypes.func,
};

export default SearchInput;
