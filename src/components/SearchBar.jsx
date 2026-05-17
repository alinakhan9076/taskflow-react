function SearchBar(props) {
    return (
        <div className="mb-4">

        <input type="text" 
        placeholder="Search task"
        value={props.searchQuery}
        onChange={(event) =>
            props.setSearchQuery(event.target.value)
        }
        className="border p-2 rounded w-full"/>

         </div>
    )
}

export default SearchBar