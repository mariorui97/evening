import React from 'react'
import './SubBar.css'

function SubBar() {
  return (
    <div id='search-box'>
        <form action='/search' id='search-form' method='get' target='_top'>
            <input id='search-text' name='q' placeholder='Search' type='text'/>
            <button id='search-button' type='submit'>                     
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default SubBar