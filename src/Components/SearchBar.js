
function SearchBar(props) {
  

    return (<div className="search">
    <input onChange={props.inputChangeHandler} value={props.inputValue} className='searchBar' />
    <button onClick={props.searchHandler}>Search</button>
  </div>)
}

export default SearchBar