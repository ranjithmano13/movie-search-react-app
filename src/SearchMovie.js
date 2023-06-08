import {useState} from 'react'
function SearchMovie(props) {
    const [movieTitle,setMovieTitle] = useState('');

    const searchMovie = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=15fb0180&t=${movieTitle}`)
            const data = await response.json();
            props.addFavourites(data);
            setMovieTitle('');
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='search-movies'>
      <form onSubmit={searchMovie}>
        <label htmlFor='query'>Movie Title</label>
        <input
        type='text'
        name='query'
        id='query'
        value={movieTitle}
        onChange={(e)=>(setMovieTitle(e.target.value))}
        placeholder='Enter the movie Name'
        role='search'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchMovie;
