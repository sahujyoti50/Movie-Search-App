function MovieList(props) {
    return (<div className='movieList' >
        {props.data.map((movies) => {
            return (<ul key={movies.movieName} className='movieDetails'>
                <li className="center">{movies.movieName}</li>
                <img src={movies.MovieImage} alt='movieList' />
                <li className="center">({movies.releaseYear})</li>
                </ul>)
        })
        }
    </div>)
}

export default MovieList