function FilterBar(props) {
    return (
       <div className="flex flex-wrap gap-3 mb-5">

        <button 
            className="bg-cyan-600 text-white px-4 py-2
            rounded-lg hover:bg-cyan-700"
            onClick={() => 
            props.setFilter("all")}
            >
               All
            </button>
        <button 
            className="bg-cyan-600 text-white px-4 py-2
            rounded-lg hover:bg-cyan-700"
             onClick={() => 
            props.setFilter("active")}
            >
                Active
            </button>
        <button  
            className="bg-cyan-600 text-white px-4 py-2
            rounded-lg hover:bg-cyan-700"
            onClick={() => 
            props.setFilter("completed")}
            >
                Completed
            </button>
            
       </div>
    )
}

export default FilterBar