import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/weather', { state: { place: input } });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for a place"
                value={input}
                onChange={handleChange}
            />

            <input
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default SearchBar;
