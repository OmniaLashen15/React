const SearchParams = () =>{
    const location = "seattle, WA";
    return (
        <div className="search-params">
            <for>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </for>
        </div>
        )
}

export default SearchParams;