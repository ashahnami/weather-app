import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/searchbar.css';

function SearchBar() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.length > 0){
            navigate('/weather', { state: { place: input } });
        }
    }

    return (
        <form onSubmit={handleSubmit} className='search'>
            <input 
                type="text"
                placeholder="Search for a place"
                value={input}
                onChange={handleChange}
                className='input'
            />

            <input
                type="submit"
                value="Search"
                className='button'
            />
        </form>
    )
}

export default SearchBar;
