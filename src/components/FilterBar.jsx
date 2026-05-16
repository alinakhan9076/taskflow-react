function FilterBar(props) {
    return (
       <div className="flex gap-2 mb-4">

        <button onClick={() => 
            props.setFilter("all")}
            >
               All
            </button>
        <button onClick={() => 
            props.setFilter("active")}
            >
                Active
            </button>
        <button onClick={() => 
            props.setFilter("completed")}
            >
                Completed
            </button>
            
       </div>
    )
}

export default FilterBar