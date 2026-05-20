function SearchBar(props) {
    return (
        <div className="mb-6">

        <input type="text" 
        placeholder="Search task"
        value={props.searchQuery}
        onChange={(event) =>
            props.setSearchQuery(event.target.value)
        }
        className="border border-gray-300 p-4 rounded-xl
        w-full outline-none text-black"/>

         </div>
    )
}

export default SearchBar