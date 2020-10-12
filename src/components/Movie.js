import React from 'react'

export default function Movie(props) {
    const {Title, Poster, Year} = props

    const setYearClass = (year) => {
        if (year < 2000) {
            return "red"
        }
        if (year >= 2000 && year < 2010) {
            return "orange"
        }
        if (year >= 2010) {
            return "green"
        }
    }
    
    return (
        <div className="movie">
            <img src={Poster} alt={Title} />           
            <div className="movie-info">
                <h3>{Title}</h3>
                <span className={`tag ${setYearClass(Year)}`}>{Year}</span>
            </div>
            <div className="movie-overview">
                <h4>Overview</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
