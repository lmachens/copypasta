import React from 'react';
import SearchInput from '../components/SearchInput';

export default {
  title: 'SearchInput',
};

const authors = ['Leon', 'Leo', 'Marwin'];
function waitFor(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const Author = () => {
  const [value, setValue] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  async function handleChange(event) {
    const value = event.target.value;
    setValue(value);

    // const authors = await fetch(
    //   `http://localhost:8080/api/authors?q=${value}`
    // ).then((response) => response.json());
    // setSearchResults(authors);

    const delay = Math.floor(Math.random() * 1000) + 200;
    console.log('Request authors', value, delay);
    await waitFor(delay);
    const regExp = new RegExp(value, 'i');
    const filteredAuthors = authors.filter((author) => author.match(regExp));
    setSearchResults(filteredAuthors);
  }

  return (
    <SearchInput
      value={value}
      onChange={handleChange}
      searchResults={searchResults}
    />
  );
};
