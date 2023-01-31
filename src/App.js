import React from "react";
/// 83e8510b (API KEY)
import { useEffect , useState} from "react";
import MovieCard from './MovieCard'
import './App.css'
import Searchicon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=83e8510b'


const App = () =>{
    const [movies,setMovies] =useState([]);
    const [searchTerm,setSearchTerm] =useState('')
    const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); 
    console.log(data)
  }
  useEffect(()=>{
      searchMovies('Batman')
  },[])
    return (
      <div className="app">
        <h1>Pustaka Film</h1>
       
        <div className="search">
        
          <input 
            placeholder="Cari film"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
          />
          <img
            src ={Searchicon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
          /> 
        </div>
        {movies?.length>0
          ? (
            <div className="container">
           {
            movies.map((movie) =>(
              < MovieCard movie={movie} />

            ))
           }
          </div>
          ) :
          (
            <div className="empty">
              <h2>Tidak ada film </h2>
            </div>
          )

        }
          <div className="footer">
            <h3>Pradipta Putra</h3>

          </div>
  
       
      </div>
    );
}
export default App;
