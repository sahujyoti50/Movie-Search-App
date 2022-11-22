import React, {  useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
export const nameContx = React.createContext();

const movieList = [{
  movieName: 'IronMan',
  releaseYear: '2008',
  MovieImage: 'https://wallpaperaccess.com/full/1925945.jpg'
},
{
  movieName: 'IronMan 3',
  releaseYear: '2013',
  MovieImage: 'https://wallpapercave.com/wp/wp1886659.jpg'
},
{
  movieName: 'Man of Steel',
  releaseYear: '2013',
  MovieImage: 'https://images.hdqwalls.com/wallpapers/the-superman-man-of-steel-4k-tp.jpg'
},
{
  movieName: 'Iron Man 2',
  releaseYear: '2010',
  MovieImage: 'https://wallpaperaccess.com/full/464869.jpg'
},
]
function App() {
  const [data, setData] = useState(movieList);
  const [inputValue, setInput] = useState('');
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  }

  const searchHandler = () => {
    const filteredData = movieList.filter((filteredMovie) => { return (inputValue !== '' ? filteredMovie.movieName.toLowerCase().includes(inputValue.toLowerCase()) : filteredMovie) })
    setData(filteredData);
  }

  return (
    <>
      <Header />
      <SearchBar inputValue={inputValue} inputChangeHandler={inputChangeHandler} searchHandler={searchHandler}/>
      <MovieList data={data} />
    </>

  )

}

export default App;
