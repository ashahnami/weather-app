import React, { useState } from 'react';

function SearchBar() {
    const [input, setInput] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Search for a place"
                value={input}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar;
