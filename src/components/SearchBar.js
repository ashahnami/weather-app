import React, { useState } from 'react';

function SearchBar() {
    const [input, setInput] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(input);
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
