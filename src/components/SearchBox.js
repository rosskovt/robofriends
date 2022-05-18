import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="tc bg2">
            <input
                type="search"
                placeholder="search robots"
                onChange={searchChange} />
        </div>
    )
}

export default SearchBox;