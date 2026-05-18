function FilterBar(props) {
    return (
       <div className="flex gap-2 mb-4">

        <button className="border px-3 py-1"
        onClick={() => 
            props.setFilter("all")}
            >
               All
            </button>
        <button  className="border px-3 py-1"
        onClick={() => 
            props.setFilter("active")}
            >
                Active
            </button>
        <button  className="border px-3 py-1"
        onClick={() => 
            props.setFilter("completed")}
            >
                Completed
            </button>
            
       </div>
    )
}

export default FilterBar