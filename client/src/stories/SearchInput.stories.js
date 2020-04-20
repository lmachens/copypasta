import React from 'react';
import SearchInput from '../components/SearchInput';
import useThrottledState from '../hooks/useThrottledState';

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
  const throttledValue = useThrottledState(value, 300);
  const [searchResults, setSearchResults] = React.useState([]);

  async function fetchSearchResults() {
    const delay = Math.floor(Math.random() * 1000) + 200;
    console.log('Request authors', value, delay);
    await waitFor(delay);
    const regExp = new RegExp(value, 'i');
    const filteredAuthors = authors.filter((author) => author.match(regExp));
    setSearchResults(filteredAuthors);
  }

  async function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  React.useEffect(() => {
    fetchSearchResults();
  }, [throttledValue]);

  return (
    <SearchInput
      value={value}
      onChange={handleChange}
      searchResults={searchResults}
    />
  );
};
