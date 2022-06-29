import React, {useState, useEffect} from 'react'
import axios from "axios"
function DataFetching() {
    const [films, setFilms ] = useState([])

    useEffect(() => {
        axios.get(" https://ghibliapi.herokuapp.com/films").then(res => {
            console.log(res)
            setFilms(res.data)
        }).catch()
    })


//Compoundidmount
    // useEffect(() => {

    // },[])

//compounddidupdate

    // useEffect(() => {

    // },[users])

//compounddidunmount

// useEffect(() => {

//     return () => {

//     }

// },[])


  return (
    <div>
        
       <ul>
        {films.map(film => (
            <li key={film.title}>{film.director}</li>
        ))}
       </ul>
    </div>
  )
}

export default DataFetching;